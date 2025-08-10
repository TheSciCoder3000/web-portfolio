"use client";

import React from "react";
import { useForm } from "@formspree/react";
import contactStyles from "@/app/styles/contact.module.scss";
import styles from "@/app/styles/global.module.scss";
import {
  AdvancedMarker,
  APIProvider,
  ColorScheme,
  Map,
} from "@vis.gl/react-google-maps";

const Contact = () => {
  const [state, handleSubmit] = useForm("xgvzrzjw");

  const position = {
    lat: 13.887,
    lng: 120.6569,
  };

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_MAPS_KEY as string}>
      <div className={contactStyles.contactContainer}>
        <div className={contactStyles.contactBox}>
          <div className={contactStyles.info}>
            <Map
              disableDefaultUI
              gestureHandling="none"
              colorScheme={ColorScheme.DARK}
              zoom={12}
              center={position}
              mapId={process.env.NEXT_PUBLIC_MAPS_ID}
            >
              <AdvancedMarker
                title="location"
                position={position}
              ></AdvancedMarker>
            </Map>
          </div>
          <div className={contactStyles.formContainer}>
            <h2 className={styles.h2}>Get In Touch</h2>
            <form className={contactStyles.contactForm} onSubmit={handleSubmit}>
              <input
                required
                className={contactStyles.contactEmail}
                type="text"
                name="name"
                id="name"
                placeholder="Name"
              />
              <input
                required
                className={contactStyles.contactEmail}
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
              <textarea
                required
                className={contactStyles.contactArea}
                id="message"
                name="message"
                placeholder="message"
                rows={7}
              />
              <button
                className={contactStyles.contactSubmit}
                type="submit"
                disabled={state.submitting}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </APIProvider>
  );
};

export default Contact;
