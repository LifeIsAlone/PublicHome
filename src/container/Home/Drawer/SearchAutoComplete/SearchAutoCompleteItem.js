import React from 'react';
import styled from 'styled-components';
import SearchIcon from '../../../../assets/SearchIcon';

function SearchAutoCompleteItem({ title, sub }) {
    return (
        <Effects>
            <Container>
                <SearchIcon width={15} height={15} color={'#C4C4C4'} />
                <Contents>
                    <h3>{title}</h3>
                    <p>{sub}</p>
                </Contents>
            </Container>
        </Effects>
    );
}
const Effects = styled.li`
    &:hover {
        background: #eeeeee;
    }
`;
const Container = styled.div`
    height: 55px;
    margin: 14px;
    padding: 7px 0px;

    display: flex;
    flex-direction: row;

    align-items: center;
`;

const Contents = styled.div`
    margin-left: 9px;
    h3 {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        text-overflow: ellipsis;
    }
    p {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 21px;
        color: #8e8e93;
        text-overflow: ellipsis;
    }
`;

export default SearchAutoCompleteItem;
