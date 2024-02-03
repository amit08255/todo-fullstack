'use client';

import {ListView} from "../components/table/ListView";
import {useEffect, useState} from "react";
import {MemberTable} from "../components/table/MemberTable";

export default function Page() {
    const [isDomLoaded, setIsDomLoaded] = useState(false);

    useEffect(() => {
        setIsDomLoaded(true);
    }, []);

    if (!isDomLoaded) {
        return null;
    }

    return (
        <ListView
            title="Tasks"
            start={1}
            end={10}
            total={50}
            hasNext={false}
            hasPrevious={false}
            onNext={() => {}}
            onPrevious={() => {}}
        >
            <MemberTable
                columns={[
                    'Name',
                    'Email',
                    'Role',
                    'Status',
                ]}
                data={[
                    ['John Doe', 'john@gmail.com', 'Admin', 'Active'],
                    ['Jane Doe', 'jane@gmail.com', 'User', 'Inactive'],
                ]}
            />
        </ListView>
    );
}