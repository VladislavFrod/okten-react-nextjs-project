'use client';

import React, { FC } from 'react';
import { PaginatedPageModel } from "@/models/PaginatedPageModel";
import { useRouter } from 'next/navigation';

interface IProps {
    next: null | PaginatedPageModel;
    prev: null | PaginatedPageModel;
    totalPages: number;
    currentPage: number;
}

const PaginationComponent: FC<IProps> = ({ next, prev, totalPages, currentPage }) => {
    const router = useRouter();

    const changePage = (page: number) => {
        router.push(`?page=${page}`)
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        const maxButtons = 10;

        if (totalPages <= maxButtons) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(
                    <button key={i} onClick={() => changePage(i)} disabled={i === currentPage}>{i}</button>
                );
            }
        } else {
            let startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
            let endPage = startPage + maxButtons - 1;

            if (endPage > totalPages) {
                endPage = totalPages;
                startPage = endPage - maxButtons + 1;
            }

            if (startPage > 1) {
                pageNumbers.push(<button key={1} onClick={() => changePage(1)}>1</button>);

                if (startPage > 2) {pageNumbers.push(<span key="start-dots">...</span>)}
            }

            for (let i = startPage; i <= endPage; i++) {
                pageNumbers.push(
                    <button key={i} onClick={() => changePage(i)} disabled={i === currentPage}>{i}</button>
                );
            }

            if (endPage < totalPages) {
                if (endPage < totalPages - 1) {pageNumbers.push(<span key="end-dots">...</span>);
                }pageNumbers.push(
                    <button key={totalPages} onClick={() => changePage(totalPages)}>{totalPages}</button>
                );
            }
        }

        return pageNumbers;
    };

    return (
        <div>
            <button disabled={!prev} onClick={() => {if (prev) changePage(prev.page);}}>prev</button>

            {renderPageNumbers()}

            <button disabled={!next} onClick={() => {if (next) changePage(next.page);}}>next</button>
        </div>
    );
};

export default PaginationComponent;
