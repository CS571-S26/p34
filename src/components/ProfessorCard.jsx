// ProfessorCard.jsx
import React from 'react';
import './professor-card.css';

export default function ProfessorCard({ professor }) {
  const { name, department, title, email, researchInterests, publications, bio, imageUrl } = professor;

  return (
    <div className="professor-card">
      <div className="professor-card__avatar">
        <img src={imageUrl} alt={name} />
      </div>

      <div className="professor-card__body">
        <div className="professor-card__header">
          <div>
            <h3 className="professor-card__name">{name}</h3>
            <p className="professor-card__title">{title} &mdash; {department}</p>
          </div>
          <span className="professor-card__pubs">{publications} publications</span>
        </div>

        <p className="professor-card__bio">{bio}</p>

        <div className="professor-card__tags">
          {researchInterests.map((interest) => (
            <span key={interest} className="professor-card__tag">{interest}</span>
          ))}
        </div>

        <a className="professor-card__email" href={`mailto:${email}`}>{email}</a>
      </div>
    </div>
  );
}
