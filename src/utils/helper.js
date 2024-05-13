import { toast } from "react-toastify";

export const openImageInNewTab = (imgUrl) => {
    const newTab = window.open();

    if (newTab) {
        newTab.location.href = imgUrl;
    } else {
        toast.error(
            "Failed to open a new tab. Please allow pop-ups for this site."
        );
    }
};