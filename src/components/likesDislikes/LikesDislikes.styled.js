import styled from "styled-components";

export const LikesDislikesContainer = styled.div`
margin-left: auto;
display: flex;
align-items: center;
`;

const LikeDislikeButton = css`
width: 24px;
height: 24px;
text-align: center;
padding: 0;
margin: 0;
flex: none;
color: #bbcdd6;
font-size: 0;
display: flex;
background: url('../../assets/likeDislike.svg') no-repeat center / 24px;
`;

export const Like = styled.button`
${LikeDislikeButton}
transform: rotate(180deg);
`;

export const Dislike = styled.button`
${LikeDislikeButton}
`;

export const LikesDislikesAmount = styled.span`
color: #6c9007;
display: flex;
align-items: center;
justify-content: center;
min-width: 38px;
font-weight: 700;
font-size: 13px;
`;