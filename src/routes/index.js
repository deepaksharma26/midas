import React, { lazy, Suspense } from 'react';
import Loading from '../components/Loading';
import Header from '../components/Header';
import Footer from '../components/Footer';
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
const Gallery = lazy(() => import('../pages/Gallery'));
const Products = lazy(() => import('../pages/Products'));
const WhoWeAre = lazy(() => import('../components/OurTeam'));
const Home02 = lazy(() => import('../pages/Home02'));


export const routes = [
  { path: '/', name: 'Home', element: <><Header /><Suspense fallback={<Loading />}><Home /></Suspense><Footer /></> },
  { path: '/about', name: 'About', element: <><Header /><Suspense fallback={<Loading />}><About /></Suspense><Footer /></> },
  { path: '/contact', name: 'Contact', element: <><Header /><Suspense fallback={<Loading />}><Contact /></Suspense><Footer /></> },
  { path: '/gallery', name: 'Gallery', element: <><Header /><Suspense fallback={<Loading />}><Gallery /></Suspense><Footer /></> },
  { path: '/home-02', name: 'Home 02', element: <><Header /><Suspense fallback={<Loading />}><Home02 /></Suspense><Footer /></> },
  // { path: '/who-we-are', name: 'Who We Are', element: <><Header /><Suspense fallback={<Loading />}><WhoWeAre /></Suspense><Footer /></> },
  { path: '/products', name: 'Products', element: <><Header /><Suspense fallback={<Loading />}><Products /></Suspense><Footer /></> },
];


