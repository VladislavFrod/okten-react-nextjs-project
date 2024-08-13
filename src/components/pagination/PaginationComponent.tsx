'use client';

import React, {FC} from 'react';
import {PaginatedPageModel} from "@/models/PaginatedPageModel";
import {useSearchParams} from "next/navigation";

interface IProps{
    next: null | PaginatedPageModel
    prev: null | PaginatedPageModel
}

const PaginationComponent: FC<IProps> = ({next, prev}) => {

    // @ts-ignore
    let [query, setQuery] = useSearchParams({page: '1'});

    const changePage = (nextOrPrev: string) => {
        switch (nextOrPrev) {
            case 'next':
                setQuery({...next});
                break;
            case 'prev':
                setQuery({...prev});
                break;

        }

    }
    return (
        <div>

            <button
                disabled={!prev}
                onClick={() => {
                    changePage('prev')
                }}
            >

                prev
            </button>

            <button
                disabled={!next}
                onClick={() => {
                    changePage('next')
                }}
            >next
            </button>
        </div>
    );
};

export default PaginationComponent;