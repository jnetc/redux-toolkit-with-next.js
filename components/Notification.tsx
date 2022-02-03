import { FC, useState, useEffect } from 'react';
import styled from 'styled-components';

import { updateStatus } from 'redux/features/notificationSlice';
import { useDispatch } from 'react-redux';

const NotificationStyle = styled.p.attrs(() => ({
  className: 'notification',
}))<{ show: boolean }>`
  position: absolute;
  top: 0;
  left: 50%;
  padding: 1rem 2rem;
  opacity: ${({ show }) => (show ? '1' : '0')};
  border-radius: 0.7rem;
  color: ${({ theme }) => theme.colors.textClr};
  background-color: ${({ theme }) => theme.colors.main};
  box-shadow: 0 30px 50px ${({ theme }) => theme.colors.cardShadow},
    0 15px 15px ${({ theme }) => theme.colors.cardShadow};
  transform: ${({ show }) =>
    show ? 'translate(-50%, 10px)' : 'translate(-50%, -100px)'};
  transition: all 0.3s ease-out;
`;

export const Notification: FC<{ message: string }> = ({ message }) => {
  const [showNotice, setShowNotice] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!message) return;

    setShowNotice(true);
    const timer = setTimeout(() => {
      setShowNotice(false);
    }, 5000);
    const removeMessage = setTimeout(() => {
      dispatch(updateStatus(''));
    }, 7000);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeMessage);
    };
  }, [message, dispatch]);
  return <NotificationStyle show={showNotice}>{message}</NotificationStyle>;
};
