import { Modal } from '@mantine/core';
import React from 'react';

interface CustomModalProps {
  title: string;
  children: React.ReactNode;
  onClose(): any;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export default function CustomModal({ title, children, onClose, size = 'md' }: CustomModalProps) {
  return (
    <Modal
      centered
      opened={true}
      onClose={onClose}
      title={title}
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
      closeOnClickOutside={false}
      size={size}
    >
      {children}
    </Modal>
  );
}
