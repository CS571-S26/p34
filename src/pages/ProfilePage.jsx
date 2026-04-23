// ProfilePage.jsx
import { useEffect, useState, useMemo } from 'react';
import './profile-page.css';

// ── Mock logged-in user ───────────────────────────────────────
const CURRENT_USER = {
  name: 'FirstName LastName',
  department: 'School of Human Ecology',
  title: 'PhD Candidate',
  imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  researchInterests: [
    'Machine Learning',
    'Natural Language Processing',
    'Computer Vision',
    'AI Ethics',
    'Reinforcement Learning',
    'Human-Computer Interaction',
  ],
};

export default function ProfilePage() {
  const [professors, setProfessors] = useState([]);

  useEffect(() => {
    fetch("/professors.json")
      .then((res) => res.json())
      .then(setProfessors)
      .catch((err) => console.error('Fetch failed:', err));
  }, []);

  // Find up to 3 professors who share at least one interest with the user,
  // ranked by how many interests they share (most first).
  const matchingProfessors = useMemo(() => {
    const userInterests = new Set(CURRENT_USER.researchInterests);

    return professors
      .map((prof) => {
        const shared = prof.researchInterests.filter((i) => userInterests.has(i));
        return { ...prof, sharedInterests: shared };
      })
      .filter((prof) => prof.sharedInterests.length > 0)
      .sort((a, b) => b.sharedInterests.length - a.sharedInterests.length)
      .slice(0, 3);
  }, [professors]);

  return (
    <div className="profile-page">
      <div className="profile-page__inner">

        {/* ── Block 1: Identity ── */}
        <div className="profile-block">
          <p className="profile-block__label">Your Profile</p>
          <div className="profile-identity">
            <img
              src={CURRENT_USER.imageUrl}
              alt={CURRENT_USER.name}
              className="profile-identity__avatar"
            />
            <div>
              <h1 className="profile-identity__name">{CURRENT_USER.name}</h1>
              <div className="profile-identity__meta">
                <span className="profile-identity__department">{CURRENT_USER.department}</span>
                <span className="profile-identity__divider" />
                <span className="profile-identity__title">{CURRENT_USER.title}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Block 2: Research Interests ── */}
        <div className="profile-block">
          <p className="profile-block__label">Research Interests</p>
          <div className="profile-interests__grid">
            {CURRENT_USER.researchInterests.map((interest) => (
              <div key={interest} className="profile-interest-card">
                <span className="profile-interest-card__dot" />
                {interest}
              </div>
            ))}
          </div>
        </div>

        {/* ── Block 3: Matching Professors ── */}
        <div className="profile-block">
          <p className="profile-block__label">Matching Professors</p>
          {matchingProfessors.length > 0 ? (
            <div className="profile-matches__list">
              {matchingProfessors.map((prof) => {
                const otherInterests = prof.researchInterests.filter(
                  (i) => !prof.sharedInterests.includes(i)
                );
                return (
                  <div key={prof.id} className="profile-match-card">
                    <img
                      src={prof.imageUrl}
                      alt={prof.name}
                      className="profile-match-card__avatar"
                    />
                    <div className="profile-match-card__body">
                      <h3 className="profile-match-card__name">{prof.name}</h3>
                      <p className="profile-match-card__sub">
                        {prof.title} &mdash; {prof.department}
                      </p>
                      <div className="profile-match-card__tags">
                        {prof.sharedInterests.map((i) => (
                          <span key={i} className="profile-match-card__tag profile-match-card__tag--shared">
                            {i}
                          </span>
                        ))}
                        {otherInterests.map((i) => (
                          <span key={i} className="profile-match-card__tag profile-match-card__tag--other">
                            {i}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="profile-matches__empty">
              No matching professors found yet.
            </p>
          )}
        </div>

      </div>
    </div>
  );
}