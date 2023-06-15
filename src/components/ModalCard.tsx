import React from 'react';
import './styles/modalCard.css';
import { ModalProps } from '../model/interfases';
import { parseDate } from '../helpers/utils';

const ModalCard = ({ visible, onClose, data }: ModalProps) => {
  const showHideClassName = visible ? 'modal-card modal-active' : 'modal-card';

  return (
    <>
      {visible && (
        <div data-testid="modal-card" className={showHideClassName} onClick={onClose}>
          <button className="close-btn" onClick={onClose}>
            X
          </button>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
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
                <li key={`episode + ${data.id}`}>
                  Number of episode: <b>{data.episode?.length}</b>
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
