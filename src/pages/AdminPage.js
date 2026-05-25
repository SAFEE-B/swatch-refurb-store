// src/pages/AdminPage.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { StyledButton } from '../components/common/Button.styles';
import { titleVariants } from '../styles/animations';

// Styles for Admin Page
const AdminContainer = styled.div`
  padding: 12rem 2rem 6rem;
  max-width: 900px;
  margin: 0 auto;
  min-height: calc(100vh - 80px); /* Adjust for nav/footer */
`;

const AdminTitle = styled(motion.h1)`
   text-align: center;
   font-size: 3.5rem;
   margin-bottom: 5rem;
   color: ${({ theme }) => theme.colors.primary};
`;

const SectionTitle = styled.h2`
    font-size: 2.4rem;
    margin-top: 4rem;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.colors.secondary};
    border-bottom: 2px solid ${({ theme }) => theme.colors.lightGray};
    padding-bottom: 0.5rem;
`;

const WatchForm = styled.form`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    background-color: #fff;
    padding: 2rem;
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: ${({ theme }) => theme.shadows.medium};
    margin-bottom: 3rem;

    label {
        font-weight: 600;
        margin-bottom: 0.5rem;
        display: block;
        color: ${({ theme }) => theme.colors.darkGray};
    }

    input[type="text"],
    input[type="number"],
    textarea {
        width: 100%;
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 1.6rem;
        &:focus {
            outline: none;
            border-color: ${({ theme }) => theme.colors.primary};
            box-shadow: 0 0 0 2px rgba(255, 87, 51, 0.2);
        }
    }

    textarea {
        min-height: 100px;
        resize: vertical;
    }
`;

const WatchList = styled.ul`
    list-style: none;
    padding: 0;
`;

const WatchListItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    margin-bottom: 1rem;
    background-color: #fff;
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: ${({ theme }) => theme.shadows.small};
    border-left: 5px solid ${({ theme }) => theme.colors.secondary};

    span {
        font-weight: 500;
    }
`;

const RemoveButton = styled.button`
    background-color: #e74c3c;
    color: white;
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1.4rem;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #c0392b;
    }
`;


// Receive watches and functions from App.js
const AdminPage = ({ watches, onAddWatch, onRemoveWatch }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    imageUrl: '',
    tags: '', // Comma-separated tags
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tagsArray = formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag !== '');
    onAddWatch({ ...formData, tags: tagsArray });
    // Reset form after submission
    setFormData({ name: '', description: '', price: '', imageUrl: '', tags: '' });
  };

  return (
    <AdminContainer>
      <AdminTitle
          variants={titleVariants}
          initial="hidden"
          animate="visible"
      >Admin - Manage Inventory</AdminTitle>

      <SectionTitle>Add New Watch</SectionTitle>
      <WatchForm onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Watch Name *</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleChange}></textarea>
        </div>
        <div>
          <label htmlFor="price">Price *</label>
          <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} required min="0" step="0.01" />
        </div>
        <div>
          <label htmlFor="imageUrl">Image URL *</label>
          <input type="text" id="imageUrl" name="imageUrl" value={formData.imageUrl} onChange={handleChange} required placeholder="e.g., /images/new_watch.jpg or https://..." />
        </div>
         <div>
           <label htmlFor="tags">Tags (comma-separated)</label>
           <input type="text" id="tags" name="tags" value={formData.tags} onChange={handleChange} placeholder="e.g., vintage, 80s, colorful" />
         </div>
        <StyledButton type="submit" primary>Add Watch</StyledButton>
      </WatchForm>

      <SectionTitle>Current Inventory</SectionTitle>
       {(!watches || watches.length === 0) ? (
           <p>No watches currently in inventory.</p>
       ) : (
        <WatchList>
        {watches.map(watch => (
          <WatchListItem key={watch.id}>
            <span>{watch.name} (${watch.price.toFixed(2)})</span>
            <RemoveButton onClick={() => onRemoveWatch(watch.id)}>
              Remove
            </RemoveButton>
          </WatchListItem>
        ))}
      </WatchList>
       )}
    </AdminContainer>
  );
};

export default AdminPage;