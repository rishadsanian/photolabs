import React, { useEffect, useRef, useState } from "react";

import "../styles/PhotoDetailsModal.scss";
import PhotoList from "../components/PhotoList";
import PhotoFavButton from "../components/PhotoFavButton";


const PhotoDetailsModal = ({
  handleFavButtonClick,
  selectedPhoto,
  getRelatedPhotos,
  handleOnImageClick,
  isFavourite,
  closeModal
}) => {



  //? meansif it exists - destructure variables
  const id = selectedPhoto?.id;
  const imageSource = selectedPhoto?.urls?.regular;
  const profile = selectedPhoto?.user?.profile;
  const username = selectedPhoto?.user?.username;
  const location = selectedPhoto?.location;

//to display similar photos
  const photos = getRelatedPhotos();

// focus on modal when selected from homepage
  const modalRef = useRef(null);
  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.focus();
    }
  }, []);


  //scroll to top when  related image is clicked
  const handleRelatedImageClick = (id) => {
    handleOnImageClick(id);
    modalRef.current.scrollTo(0, 0);
  };


  return (
    // tab-index is used to focus on modal when clicked
    <div className="photo-details-modal" tabIndex={0} ref={modalRef}>
      <div className="photo-details-modal__header">
        <button
          className="photo-details-modal__close-button"
          onClick={closeModal}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_428_287)">
              <path
                d="M14.0625 3.9375L3.9375 14.0625"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.0625 14.0625L3.9375 3.9375"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_428_287">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
      <div className="photo-details-modal__content">
        <div className="photo-details-modal__image-wrapper">
          <PhotoFavButton
            onClick={() => handleFavButtonClick(id)}
            isFavourite={isFavourite}
            id={id}
            className="photo-details-modal__fav-button"
          />
    
          <img
            src={imageSource}
            className="photo-details-modal__image"
            alt="Photo"
          ></img>
        </div>

        <div className="photo-details-modal__photographer-details">
          <img
            src={profile}
            className="photo-details-modal__user-profile"
            alt="Profile"
          ></img>
          <section className="photo-details-modal__photographer-info">
            <p className="photo-details-modal__user-info">{username}</p>
            <p className="photo-details-modal__user-location">
              {location?.city}, {location?.country}
            </p>
          </section>
        </div>
        <section className="photo-details-modal__related-photos">
          <p className="photo-details-modal__related-photos-header">
            Related Photos
          </p>
          <PhotoList
            photos={photos}
            handleFavButtonClick={(id) => handleFavButtonClick(id)}
            handleOnImageClick={handleRelatedImageClick}//added scroll to top
            isFavourite={isFavourite}
            id={id}
          />
        </section>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
