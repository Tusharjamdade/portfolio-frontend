"use client";

import { useState, useEffect, useRef } from "react";
import axios from "axios";

export function AnimatedCounter() {
  const [views, setViews] = useState(0);
  const [comments, setComments] = useState(0);
  const [contacts, setContacts] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const counterRef = useRef<HTMLDivElement | null>(null);
  
  // Use IntersectionObserver to check visibility of the section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  // Fetch data from the server on page load
  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch current counts for views, comments, and contacts
        const response = await axios.get("https://portfolio-backend.tusharnjamdade.workers.dev/refresh");
        const { viewsNumber, commentsLenght, contactmeLenght } = response.data;

        setViews(viewsNumber);
        setComments(commentsLenght);
        setContacts(contactmeLenght);

        // Increment views count by 1 on each page refresh
        await axios.post("https://portfolio-backend.tusharnjamdade.workers.dev/views", {
          views: viewsNumber + 1,
        });

        setViews((prevViews) => prevViews + 1); // Increment locally after updating on server
      } catch (error) {
        console.error("Error fetching or updating data:", error);
      }
    }

    fetchData();
  }, []);

  // Handle comments and contacts animation on visibility
  useEffect(() => {
    if (!isVisible) return;

    // Animate comments
    const commentsTarget = comments; // Store the target comments count
    const commentsInterval = setInterval(() => {
      setComments((prev) => {
        if (prev < commentsTarget) {
          return prev + 1;
        } else {
          clearInterval(commentsInterval);
          return prev;
        }
      });
    }, 100);

    // Animate contacts
    const contactsTarget = contacts; // Store the target contacts count
    const contactsInterval = setInterval(() => {
      setContacts((prev) => {
        if (prev < contactsTarget) {
          return prev + 1;
        } else {
          clearInterval(contactsInterval);
          return prev;
        }
      });
    }, 100);

    return () => {
      clearInterval(commentsInterval);
      clearInterval(contactsInterval);
    };
  }, [isVisible, comments, contacts]);

  return (
    <section className="dark:bg-black bg-white dark:text-white text-black py-12 md:py-16 lg:py-20">
      <div
        className="container grid grid-cols-1 gap-6 md:grid-cols-3 sm:text-base"
        ref={counterRef}
      >
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-2xl font-bold">Views</h3>
          <div className="text-4xl font-bold">{views.toLocaleString()}+</div>
          <p className="text-sm text-muted-foreground">
            Number of views on the website
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-2xl font-bold">Comments</h3>
          <div className="text-4xl font-bold">{comments.toLocaleString()}+</div>
          <p className="text-sm text-muted-foreground">
            Number of comments received
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-2xl font-bold">Contacts</h3>
          <div className="text-4xl font-bold">{contacts.toLocaleString()}+</div>
          <p className="text-sm text-muted-foreground">
            Number of contact me requests
          </p>
        </div>
      </div>
    </section>
  );
}
