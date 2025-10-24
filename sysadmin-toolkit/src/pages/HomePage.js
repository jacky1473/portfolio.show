import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ToolCard from '../components/ToolCard';
import { tools } from '../data/tools';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <main className="tool-grid">
        {tools.map(tool => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;