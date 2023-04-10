import React from 'react';
import './styles/modalCard.css';
import { ModalProps } from '../model/interfases';

const ModalCard = ({ visible, setVisible, data }: ModalProps) => {
  const showHideClassName = visible ? 'modal-card modal-active' : 'modal-card';
  const parseDate = (data: string) => {
    const date = new Date(data);
    return date.toDateString();
  };

  return (
    <>
      {visible && (
        <div data-testid="modal-card" className={showHideClassName} onClick={setVisible}>
          <div className="modal-container">
            <div className="modal-image-container">
              <img src={data.image} alt="Character image" />
            </div>
            <div className="text-container">
              <h3 className="modal-title">{data.name}</h3>
              <h4 className="info-title">Main information: </h4>
              <ul className="modal-list">
                <li key={`status + ${data.id}`}>
                  Status: <b>{data.status}</b>
                </li>
                <li key={`species + ${data.id}`}>
                  Species: <b>{data.species}</b>
                </li>
                <li key={`gender + ${data.id}`}>
                  Gender: <b>{data.gender}</b>
                </li>
                <li key={`origin + ${data.id}`}>
                  Origin: <b>{data.origin.name}</b>
                </li>
                <li key={`location + ${data.id}`}>
                  Location: <b>{data.location.name}</b>
                </li>
                <li key={`created + ${data.id}`}>
                  Created: <b>{parseDate(data.created)}</b>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalCard;
