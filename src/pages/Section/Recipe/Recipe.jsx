import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch('http://localhost:5000/recipes');
        const data = await response.json();
        console.log(data);
        const filteredRecipe = data.filter((recipe) => recipe.chef_id === id);
        setRecipes(filteredRecipe);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };
    fetchRecipe();
  }, [id]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
        <div>
            
        </div>
      <Footer />
    </div>
  );
};

export default Recipe;