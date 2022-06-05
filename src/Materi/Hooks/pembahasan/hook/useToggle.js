import { useState } from "react"

export const useToggle = () => {
    const [value, setValue] = useState(false);

    return [value, setValue];
}