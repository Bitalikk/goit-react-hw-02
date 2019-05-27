import React from 'react';

const style = { color: '#ff0000', display: 'block' };

const ErrorNotification = ({ label }) => <span style={style}>{label}</span>;

export default ErrorNotification;
