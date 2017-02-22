import $ from "jquery";

function fetchNextDone(pois) {
  return {
    type: "FETCH_NEXT_DONE",
    data: pois,
  };
}

function fetchNext(id) {
  return (dispatch) => {
    $.ajax({
      url: `/place/${id}/pois`,
      contentType: "application/json",
    }).done((pois) => {
      dispatch(fetchNextDone(pois.data));
    });

    dispatch({
      type: "FETCH_NEXT",
    });
  };
}

function fetchPoiDone(poi) {
  return {
    type: "FETCH_POI_DONE",
    data: poi,
  };
}

function fetchPoi(id) {
  return (dispatch) => {
    $.ajax({
      url: `/pois/${id}`,
      contentType: "application/json",
    }).done((poi) => {
      dispatch(fetchPoiDone(poi.data));
    });

    dispatch({
      type: "FETCH_NEXT",
    });
  };
}

function fetchImagesDone(images, id) {
  return {
    type: "FETCH_IMAGES_DONE",
    data: {
      id,
      images,
    },
  };
}

function fetchImages(id) {
  return (dispatch) => {
    $.ajax({
      url: `/pois/${id}/images`,
      contentType: "application/json",
    }).done((images) => {
      dispatch(fetchImagesDone(images.data, id));
    });

    dispatch({
      type: "FETCH_IMAGES",
    });
  };
}

export {
  fetchNext,
  fetchNextDone,
  fetchPoi,
  fetchImages,
  fetchImagesDone,
};
