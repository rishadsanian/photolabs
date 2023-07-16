import React, { useEffect, useRef, useState } from "react";

import "../styles/PhotoDetailsModal.scss";
import PhotoList from "../components/PhotoList";
import PhotoFavButton from "../components/PhotoFavButton";


const PhotoDetailsModal = ({
  handleOnClick,
  filteredPhoto,
  toggleModal,
  getRelatedPhotos,
  handleOnImageClick,
  isFavourite,
  // modal,
  closeModal
  // photo,
  // handleFavs,
  // handlePhotoClick,
  // onClick,
  // selected,
  // setSelected,
}) => {


  console.log("31 => filteredPhoto", filteredPhoto)
  const id = filteredPhoto?.id;
  const imageSource = filteredPhoto?.urls?.regular;
  const profile = filteredPhoto?.user?.profile;
  const username = filteredPhoto?.user?.username;
  const location = filteredPhoto?.location;


  const photos = getRelatedPhotos();
  const modalRef = useRef(null);

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.focus();
    }
  }, []);

  const handleRelatedImageClick = (id) => {
    handleOnImageClick(id);
    modalRef.current.scrollTo(0, 0);
  };
  // const onClick = () => {
  //   setSelected(!selected);
  //   handleFavs(photo, selected);
  // };

  return (
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
            selected={filteredPhoto.selected}
            onClick={() => handleOnClick(id)}
            isFavourite={isFavourite}
            id={id}
            className="photo-details-modal__fav-button"
          />
          {filteredPhoto.selected}
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
            handleOnClick={(id) => handleOnClick(id)}
            handleOnImageClick={handleRelatedImageClick}
            isFavourite={isFavourite}
            id={id}
            // modal={modal}
            // handlePhotoClick={handlePhotoClick} 
            // handleFavs={handleFavs}
            // getRelatedPhotos={getRelatedPhotos}

            // isFavourite={isFavourite}
            // favPhotos={favPhotos}
            // selected={selected}
            // setSelected={setSelected}
          />
        </section>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
