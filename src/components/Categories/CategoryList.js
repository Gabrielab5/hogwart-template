import React from 'react';
import CategoryCard from './CategoryCard';
import {Link} from 'react-router-dom'

const CategoryList = ({ categories }) => {
  return (
    <div className="category-list">     
      {categories.slice(0).map(category => (
         <Link to={`/wiki/${category.routeLink}`} key={category.id}>
          <CategoryCard id= {category} categoryData={category} />
          </Link>
        ))}
    </div>
  );
}

export default CategoryList;
