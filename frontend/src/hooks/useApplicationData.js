//------------------------------IMPORTS-------------------------------//
import { useEffect, useReducer } from "react";
import axios from "axios";
//------------------------------INITIAL STATE---------------------------//
const initialState = {
  favPhotos: [],
  selectedPhoto: {},
  appPhotos: [],
  appTopics: [],
  modal: false,
};

//---------------------------ACTIONS FOR REDUCER---------------------------//
export const ACTIONS = {
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  ADD_PHOTO_TO_FAVORITES: "ADD_PHOTO_TO_FAVORITES",
  REMOVE_PHOTO_FROM_FAVORITES: "REMOVE_PHOTO_FROM_FAVORITES",
  SET_SELECTED_PHOTO: "SET_SELECTED_PHOTO",
  SET_MODAL_OPEN: "SET_MODAL_OPEN",
  SET_MODAL_CLOSE: "SET_MODAL_CLOSE",
  SHOW_FAVORITE_PHOTOS: "SHOW_FAVORITE_PHOTOS",
};

const {
  SET_PHOTO_DATA,
  SET_TOPIC_DATA,
  ADD_PHOTO_TO_FAVORITES,
  REMOVE_PHOTO_FROM_FAVORITES,
  SET_SELECTED_PHOTO,
  SET_MODAL_OPEN,
  SET_MODAL_CLOSE,
  SHOW_FAVORITE_PHOTOS,
} = ACTIONS;

//-------------------------REDUCER SWITCH---------------------------//
const reducer = (state, action) => {
  switch (action.type) {
    //can be used to live connect data from server to state
    case SET_PHOTO_DATA:
      return {
        ...state,
        appPhotos: action.photos, //photos is payload
      };
    case SET_TOPIC_DATA:
      return {
        ...state,
        appTopics: action.topics, //topics is payload
      };

    //favourites
    case ADD_PHOTO_TO_FAVORITES:
      return {
        ...state,
        favPhotos: [...state.favPhotos, action.photo],
      };
    case REMOVE_PHOTO_FROM_FAVORITES:
      return {
        ...state,
        favPhotos: state.favPhotos.filter(
          (photo) => photo.id !== action.photoId
        ),
      };

    case SHOW_FAVORITE_PHOTOS:
      return {
        ...state,
        appPhotos: state.favPhotos,
      };

    //selected photo
    case SET_SELECTED_PHOTO:
      return {
        ...state,
        selectedPhoto: action.photo,
      };

    //modal
    case SET_MODAL_OPEN:
      return {
        ...state,
        modal: true,
      };
    case SET_MODAL_CLOSE:
      return {
        ...state,
        modal: false,
      };

    //if error occurs throw new error
    default:
      throw new Error(`Failed to perform action type: ${action.type}`);
  }
};
//------------------------useApplicationData hook---------------------------//

const useApplicationData = () => {
  //set initalState
  const [state, dispatch] = useReducer(reducer, initialState);

  // ------------------------------Loading Data-------------------------------
  const loadPhotos = () => {
    useEffect(() => {
      // Fetch photos data
      axios
        .get("/api/photos")
        .then((response) => {
          dispatch({ type: SET_PHOTO_DATA, photos: response.data });
        })
        .catch((error) => {
          console.error("Error fetching photos:", error);
          throw error;
        });
    }, []);
  };

  const loadTopics = () => {
    useEffect(() => {
      // Fetch topics data
      axios
        .get("/api/topics")
        .then((response) => {
          dispatch({ type: SET_TOPIC_DATA, topics: response.data });
        })
        .catch((error) => {
          console.error("Error fetching topics:", error);
          throw error;
        });
    }, []);
  };

  //---------------------------LOADING TOPIC PHOTOS--------------------------//
  //SHOWS ALL PHOTOS used in the logo and all in navbar
  const displayAllPhotos = async () => {
    try {
      const response = await axios.get("/api/photos");
      dispatch({ type: SET_PHOTO_DATA, photos: response.data });
    } catch (error) {
      console.error("Error fetching photos:", error);
      throw error;
    }
  };
  //---------------------------LOADING TOPIC PHOTOS--------------------------
  // Shows photos by topic category - used in topiclistitem.jsx
  const showPhotosByTopic = async (topicId) => {
    try {
      const response = await axios.get(`/api/topics/photos/${topicId}`);
      dispatch({ type: SET_PHOTO_DATA, photos: response.data });
    } catch (error) {
      console.error("Error fetching photos by topic:", error);
      throw error;
    }
  };
  //------------------------------FAVOURITES-------------------------------//

  //Shows fav photos when favbadge is clicked in navigation bar
  const showFavPhotos = () => {
    dispatch({ type: SHOW_FAVORITE_PHOTOS });
  };

  //checks if there are any photos in favPhotos. used for fav notification - triggered if favPhotos is not empty for notification icon in top navigation bar - used in FavBadge component
  const isFavPhotoExist = () => {
    return state.favPhotos.length > 0;
  };

  //checks if a photo is in favPhotos based on the photo id. passed down to PhotoFavButton to fill it if image is in favPhotos
  const isFavourite = (id) => {
    return state.favPhotos.some((photo) => photo.id === id);
  };

  // logs favPhotos state. Display favPhotos array whenever it changes (used on app.jsx)
  const logFavPhotos = () =>
    useEffect(() => {
      console.log(state.favPhotos);
    }, [state.favPhotos]);

  //When FavButton is clicked on a photo- photo object is saved to fav photos if not already saved, unsaves it if it is already saved
  const addPhotoToFavorites = (photoId) => {
    const selectedPhoto = state.appPhotos.find((photo) => photo.id === photoId);
    dispatch({ type: ADD_PHOTO_TO_FAVORITES, photo: selectedPhoto });
  };

  const removePhotoFromFavorites = (photoId) => {
    dispatch({ type: REMOVE_PHOTO_FROM_FAVORITES, photoId });
  };

  const handleFavButtonClick = (photoId) => {
    const isPhotoFavourite = isFavourite(photoId);
    if (isPhotoFavourite) {
      removePhotoFromFavorites(photoId);
    } else {
      addPhotoToFavorites(photoId);
    }
  };

  //---------------------------------MODAL------------------------------------//

  //Gets related photos of selected photo. passed into photolist in related photos section in the photodetails modal

  const getRelatedPhotos = () => {
    const relatedPhotos = [];
    if (state.selectedPhoto) {
      for (let photo in state.selectedPhoto.similar_photos) {
        relatedPhotos.push(state.selectedPhoto.similar_photos[photo]);
      }
    }
    return relatedPhotos;
  };

  //closes modal (used in photodetails Modal section)
  const closeModal = () => {
    dispatch({ type: SET_MODAL_CLOSE });
  };

  // opens the modal when photo is clicked  and sets photo current selected photo used on photolist image items
  const handleOnImageClick = (id) => {
    if (id) {
      const photo = [...state.appPhotos].find((photo) => photo.id === id);
      dispatch({ type: SET_SELECTED_PHOTO, photo });
    }
    dispatch({ type: SET_MODAL_OPEN });
  };

  //------------------------VALUES TO PASS------------------------------------//

  return {
    state,
    logFavPhotos,
    isFavPhotoExist,
    isFavourite,
    closeModal,
    handleOnImageClick,
    getRelatedPhotos,
    handleFavButtonClick,
    loadPhotos,
    loadTopics,
    showPhotosByTopic,
    showFavPhotos,
    displayAllPhotos,
  };
};

export default useApplicationData;
