import React from 'react';
import './ExploreContainer.css';
import ListRessource from './ListUser';


interface ContainerProps {
  name: string;
  children?: React.ReactNode
}


const ExploreContainer: React.FC<ContainerProps> = ({ name, children }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
      {children}
    </div>
  );
};

export default ExploreContainer;
