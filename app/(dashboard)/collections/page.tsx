"use client";

import { useEffect, useState } from "react";

const CollectionsPage = () => {
    const [loading, setLoading] = useState(true);
    const [collections, setCollections] = useState([]);

    const getCollections = async () => {
        try {
          const res = await fetch("/api/collections", {
            method: "GET",
          });
          const data = await res.json();
          setCollections(data);
          setLoading(false);
        } catch (err) {
          console.log("[collections_GET]", err);
        }
    };

    useEffect(() => {
        getCollections();
    }, []);

    console.log(collections)
    
    
    return (
        <div>CollectionsPage</div>
    )
}

export default CollectionsPage;