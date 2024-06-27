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

export const capitalizeByCharacter = (data, char) => {
    if (data) {
        return data
            .split(char)
            .map((str) => str[0].toLocaleUpperCase() + str.slice(1))
            .join(" ");
    } else return "";
};

export const JOB_STATUS_JSON = {
    incomplete: 0,
    created: 1,
    accepted: 2,
    pickup: 3,
    running: 4,
    completed: 5,
    recreated: 6,
    cancelled: 7,
    returned: 8,
    deleted: 9,
    rejected: 10,
};