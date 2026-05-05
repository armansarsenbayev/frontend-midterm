import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import Spinner from './components/Spinner';
import './App.css';


const Dashboard      = lazy(() => import('./pages/Dashboard'));
const Diary          = lazy(() => import('./pages/Diary'));
const MealList       = lazy(() => import('./pages/MealList'));
const MealForm       = lazy(() => import('./components/MealForm'));
const ProfileSetup   = lazy(() => import('./pages/ProfileSetup'));
const About          = lazy(() => import('./pages/About'));
const LoginPage      = lazy(() => import('./pages/LoginPage'));
const MealDetailPage = lazy(() => import('./pages/MealDetailPage'));
const NotFoundPage   = lazy(() => import('./pages/NotFoundPage'));

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="main-content">
        <Suspense fallback={<Spinner text="Loading page..." />}>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/diary" element={<ProtectedRoute><Diary /></ProtectedRoute>}>
              <Route path="list" element={<MealList />} />
              <Route path="add"  element={<MealForm />} />
            </Route>
            <Route path="/diary/meal/:id" element={<ProtectedRoute><MealDetailPage /></ProtectedRoute>} />
            <Route path="/settings" element={
              <ProtectedRoute>
                <div className="dashboard-container">
                  <div className="title-section"><h2>Settings</h2><p>Update your body metrics</p></div>
                  <ProfileSetup />
                </div>
              </ProtectedRoute>
            } />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;