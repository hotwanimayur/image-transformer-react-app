import axios from 'axios'

export const resizeImage = async (resizeParams) => {
    const response = await axios.get("http://localhost:8080/magic-image/resize-image", {params: resizeParams})
    console.log(response.data)
    return response;
}

export const changeImageFormat = async (formatParams) => {
    const response = await axios.get("http://localhost:8080/magic-image/change-format", {params: formatParams})
    console.log(response.data)
    return response;
}

export const cropImage = async (cropParams) => {
    const response = await axios.get("http://localhost:8080/magic-image/crop-image", {params: cropParams})
    console.log(response.data)
    return response;
}

export const rotateImage = async (rotationParams) => {
    const response = await axios.get("http://localhost:8080/magic-image/rotate-image", {params: rotationParams})
    console.log(response.data)
    return response;
}

export const applyGrayScaleFilter = async (grayscaleParams) => {
    const response = await axios.get("http://localhost:8080/magic-image/apply-grayscale", {params: grayscaleParams})
    console.log(response.data.error)
    return response;
}

export const posterizeImage = async (posterizeParams) => {
    const response = await axios.get("http://localhost:8080/magic-image/posterize-image", {params: posterizeParams})
    console.log(response.data)
    return response;
}