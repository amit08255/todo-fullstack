'use client';

import {ListView} from "../components/table/ListView";
import {useEffect, useState} from "react";

export default function Page() {
    const [isDomLoaded, setIsDomLoaded] = useState(false);

    useEffect(() => {
        setIsDomLoaded(true);
    }, []);

    if (!isDomLoaded) {
        return null;
    }

    return <ListView />
}