import React, { useEffect, useState } from 'react';
import './CardPage.css';
import ModalForm from './ModalForm'; // Import the modal form

const CardPage = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch('http://localhost:8080/api/profile/get');
      const json = await res.json();
      setData(json.allProfiles);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // To blur the container when modal is open
  const containerClass = showModal ? 'container blurred' : 'container';

  return (
    <>
      <div className={containerClass}>
        <div className="header">
          <h1 className="title">Profiles</h1>
          <button
            className="add-button add-new-button"
            onClick={() => setShowModal(true)}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#1e40af')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#2563eb')}
          >
            + Add New
          </button>
        </div>

        {loading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading profiles...</p>
          </div>
        ) : (
          <div className="grid">
            {data.map((item, index) => (
              <div
                key={index}
                className="card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                }}
              >
                <img
                  src={item.photo || 'https://via.placeholder.com/150'}
                  alt={item.firstName}
                  className="card-image"
                />
                <h2 className="card-name">
                  {item.firstName} {item.lastName}
                </h2>
                <p className="card-role">{item.role}</p>
                <div className="social-icons">
                  {item.linkedin && (
                    <a
                      href={item.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon linkedin-icon"
                      title="LinkedIn"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#0A66C2">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  )}
                  {item.twitter && (
                    <a
                      href={item.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon twitter-icon"
                      title="Twitter"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#1DA1F2">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {showModal && <ModalForm onClose={() => setShowModal(false)} onSuccess={fetchData} />}
    </>
  );
};

export default CardPage;





