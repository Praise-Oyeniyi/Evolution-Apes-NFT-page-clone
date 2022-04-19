import React from 'react'
import HeroSection from './HeroSection';
import Gallery from './Gallery/Gallery';
import Collection from './Collection';
import About from './About';
import Team from './Team';
import Faq from './Faq/Faq';
import { motion } from 'framer-motion';
import Whitelist from './Whitelist';

const Body = () => {
  return (
      <div className="body scroll-smooth overflow-x-hidden sm:text-sm">
            <HeroSection/>
            <motion.div 
                initial={{y:'-100vh',opacity:0}} animate={{y:0, opacity:1}} transition={{duration:.5}}
                className="w-auto h-auto bg-gray-900 fixed bg-opacity-80 top-[40%] -right-0 z-40 flex justify-around items-center border">
                <div className="sm-links h-full w-full p-2 flex flex-col justify-center items-center space-y-3 cursor-pointer ease">
                    <svg className='fill-white h-6 stroke-red-300 stroke-1 hover:stroke-red-100 ' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 80 80" ><path d="M 48.707031 16 C 48.320313 16.007813 47.976563 16.234375 47.816406 16.585938 C 47.816406 16.585938 47.257813 17.816406 46.957031 19.503906 C 43.953125 19 41.410156 18.875 40 18.875 C 38.589844 18.875 36.046875 19 33.042969 19.503906 C 32.742188 17.816406 32.183594 16.585938 32.183594 16.585938 C 32.011719 16.210938 31.628906 15.980469 31.21875 16 C 31.207031 16.003906 31.199219 16.003906 31.191406 16.003906 C 31.191406 16.003906 21.992188 16.640625 16.105469 21.316406 C 16.089844 21.332031 16.070313 21.34375 16.054688 21.359375 C 15.121094 22.210938 14.296875 23.699219 13.328125 25.8125 C 12.363281 27.929688 11.34375 30.628906 10.40625 33.6875 C 8.535156 39.804688 7 47.335938 7 54.375 C 7 54.550781 7.046875 54.722656 7.132813 54.875 C 9.179688 58.425781 12.976563 60.632813 16.574219 62.015625 C 20.167969 63.394531 23.539063 63.949219 25.152344 64 C 25.480469 64.011719 25.792969 63.859375 25.984375 63.59375 L 29.730469 58.511719 C 32.617188 59.203125 36.027344 59.6875 40 59.6875 C 43.972656 59.6875 47.382813 59.203125 50.269531 58.511719 L 54.015625 63.59375 C 54.207031 63.859375 54.519531 64.011719 54.847656 64 C 56.464844 63.949219 59.832031 63.394531 63.425781 62.015625 C 67.023438 60.632813 70.820313 58.425781 72.867188 54.875 C 72.953125 54.722656 73 54.550781 73 54.375 C 73 47.335938 71.464844 39.804688 69.59375 33.6875 C 68.65625 30.628906 67.636719 27.929688 66.671875 25.8125 C 65.703125 23.699219 64.878906 22.210938 63.949219 21.359375 C 63.929688 21.347656 63.914063 21.332031 63.894531 21.316406 C 58.007813 16.640625 48.808594 16.003906 48.808594 16.003906 C 48.773438 16 48.742188 16 48.707031 16 Z M 30.546875 18.140625 C 30.691406 18.503906 30.917969 19.003906 31.074219 19.867188 C 27.707031 20.59375 23.945313 21.835938 20.496094 23.953125 C 20.179688 24.132813 19.992188 24.472656 20 24.832031 C 20.007813 25.195313 20.207031 25.527344 20.527344 25.695313 C 20.847656 25.867188 21.234375 25.851563 21.539063 25.65625 C 28.402344 21.449219 37.03125 20.875 40 20.875 C 42.96875 20.875 51.597656 21.449219 58.460938 25.65625 C 58.765625 25.851563 59.152344 25.867188 59.472656 25.695313 C 59.792969 25.527344 59.992188 25.195313 60 24.832031 C 60.007813 24.472656 59.820313 24.132813 59.503906 23.953125 C 56.050781 21.835938 52.289063 20.59375 48.921875 19.867188 C 49.082031 19.007813 49.308594 18.503906 49.453125 18.140625 C 50.667969 18.273438 57.878906 19.125 62.613281 22.859375 C 63.019531 23.238281 63.9375 24.648438 64.851563 26.644531 C 65.769531 28.65625 66.765625 31.289063 67.679688 34.269531 C 69.480469 40.15625 70.929688 47.414063 70.972656 54.082031 C 69.25 56.882813 65.984375 58.886719 62.710938 60.144531 C 59.609375 61.339844 56.679688 61.824219 55.273438 61.929688 L 52.34375 57.953125 C 53.800781 57.515625 55.105469 57.039063 56.21875 56.558594 C 59.835938 54.984375 61.730469 53.34375 61.730469 53.34375 C 62.003906 53.109375 62.128906 52.746094 62.058594 52.394531 C 61.992188 52.042969 61.738281 51.753906 61.398438 51.636719 C 61.058594 51.523438 60.683594 51.597656 60.414063 51.839844 C 60.414063 51.839844 58.816406 53.246094 55.421875 54.722656 C 52.027344 56.199219 46.902344 57.6875 40 57.6875 C 33.097656 57.6875 27.972656 56.199219 24.578125 54.722656 C 21.183594 53.246094 19.585938 51.839844 19.585938 51.839844 C 19.410156 51.679688 19.183594 51.589844 18.949219 51.582031 C 18.523438 51.570313 18.136719 51.824219 17.984375 52.222656 C 17.832031 52.617188 17.945313 53.070313 18.269531 53.34375 C 18.269531 53.34375 20.164063 54.984375 23.78125 56.558594 C 24.894531 57.039063 26.199219 57.515625 27.65625 57.953125 L 24.726563 61.929688 C 23.320313 61.824219 20.390625 61.339844 17.292969 60.144531 C 14.019531 58.886719 10.75 56.882813 9.027344 54.082031 C 9.070313 47.414063 10.519531 40.15625 12.320313 34.269531 C 13.234375 31.289063 14.230469 28.65625 15.148438 26.644531 C 16.0625 24.648438 16.984375 23.234375 17.390625 22.859375 C 22.121094 19.125 29.332031 18.273438 30.546875 18.140625 Z M 17.78125 28.429688 L 16.957031 28.78125 L 16.78125 29.082031 L 16.746094 29.175781 L 16.847656 30.066406 L 17.621094 30.519531 L 18.449219 30.171875 L 18.625 29.863281 L 18.65625 29.769531 L 18.558594 28.878906 Z M 62.566406 28.46875 L 61.683594 28.625 L 61.28125 29.421875 L 61.34375 29.769531 L 61.375 29.863281 L 62.027344 30.480469 L 62.910156 30.324219 L 63.3125 29.523438 L 63.253906 29.175781 L 63.21875 29.082031 Z M 16.390625 32.292969 L 15.574219 32.660156 L 15.40625 32.96875 L 15.371094 33.0625 L 15.496094 33.953125 L 16.277344 34.386719 L 17.09375 34.015625 L 17.265625 33.707031 L 17.296875 33.613281 L 17.171875 32.722656 Z M 63.957031 32.339844 L 63.074219 32.472656 L 62.652344 33.265625 L 62.703125 33.613281 L 62.734375 33.707031 L 63.375 34.339844 L 64.261719 34.203125 L 64.683594 33.410156 L 64.628906 33.0625 L 64.59375 32.96875 Z M 30 36 C 26.644531 36 24 38.972656 24 42.5 C 24 46.027344 26.644531 49 30 49 C 33.355469 49 36 46.027344 36 42.5 C 36 38.972656 33.355469 36 30 36 Z M 50 36 C 46.644531 36 44 38.972656 44 42.5 C 44 46.027344 46.644531 49 50 49 C 53.355469 49 56 46.027344 56 42.5 C 56 38.972656 53.355469 36 50 36 Z M 15.105469 36.203125 L 14.3125 36.613281 L 14.15625 36.933594 L 14.128906 37.03125 L 14.300781 37.90625 L 15.109375 38.296875 L 15.90625 37.886719 L 16.058594 37.566406 L 16.082031 37.46875 L 15.914063 36.59375 Z M 65.238281 36.269531 L 64.347656 36.355469 L 63.882813 37.121094 L 63.917969 37.46875 L 63.941406 37.566406 L 64.546875 38.230469 L 65.4375 38.144531 L 65.902344 37.378906 L 65.871094 37.03125 L 65.84375 36.933594 Z M 30 38 C 32.167969 38 34 39.953125 34 42.5 C 34 45.046875 32.167969 47 30 47 C 27.832031 47 26 45.046875 26 42.5 C 26 39.953125 27.832031 38 30 38 Z M 50 38 C 52.167969 38 54 39.953125 54 42.5 C 54 45.046875 52.167969 47 50 47 C 47.832031 47 46 45.046875 46 42.5 C 46 39.953125 47.832031 38 50 38 Z M 14 40.160156 L 13.21875 40.609375 L 13.082031 40.929688 L 13.058594 41.027344 L 13.265625 41.902344 L 14.085938 42.253906 L 14.863281 41.8125 L 15.003906 41.488281 L 15.027344 41.390625 L 14.820313 40.515625 Z M 66.34375 40.242188 L 65.449219 40.292969 L 64.953125 41.039063 L 64.972656 41.390625 L 64.996094 41.488281 L 65.570313 42.175781 L 66.464844 42.125 L 66.960938 41.378906 L 66.941406 41.027344 L 66.917969 40.929688 Z M 13.066406 44.167969 L 12.308594 44.640625 L 12.179688 44.96875 L 12.160156 45.066406 L 12.402344 45.933594 L 13.234375 46.253906 L 13.996094 45.78125 L 14.125 45.453125 L 14.140625 45.355469 L 13.902344 44.488281 Z M 67.269531 44.261719 L 66.375 44.277344 L 65.851563 45 L 65.859375 45.355469 L 65.875 45.453125 L 66.421875 46.160156 L 67.320313 46.144531 L 67.84375 45.421875 L 67.839844 45.066406 L 67.820313 44.96875 Z M 12.386719 48.230469 L 11.660156 48.753906 L 11.558594 49.09375 L 11.546875 49.191406 L 11.847656 50.035156 L 12.703125 50.300781 L 13.425781 49.769531 L 13.53125 49.4375 L 13.546875 49.335938 L 13.242188 48.492188 Z M 67.050781 48.296875 L 66.472656 48.984375 L 66.453125 49.335938 L 66.46875 49.4375 L 66.964844 50.183594 L 67.859375 50.230469 L 68.433594 49.546875 L 68.453125 49.191406 L 68.441406 49.09375 L 67.945313 48.34375 Z"/></svg>
                    <svg className='fill-white h-6 stroke-red-300 stroke-1 hover:stroke-red-100' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32"><path d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z"/></svg>
                    <svg className='fill-white h-6 stroke-red-300 stroke-1 hover:stroke-red-100' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" ><path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z"/></svg>
                    <svg className='fill-white h-6  stroke-red-300 stroke-1 hover:stroke-red-100' xmlns="http://www.w3.org/2000/svg "  viewBox="0 0 50 50" ><path d="M 34.21875 5.46875 C 28.238281 5.46875 23.375 10.332031 23.375 16.3125 C 23.375 16.671875 23.464844 17.023438 23.5 17.375 C 16.105469 16.667969 9.566406 13.105469 5.125 7.65625 C 4.917969 7.394531 4.597656 7.253906 4.261719 7.277344 C 3.929688 7.300781 3.632813 7.492188 3.46875 7.78125 C 2.535156 9.386719 2 11.234375 2 13.21875 C 2 15.621094 2.859375 17.820313 4.1875 19.625 C 3.929688 19.511719 3.648438 19.449219 3.40625 19.3125 C 3.097656 19.148438 2.726563 19.15625 2.425781 19.335938 C 2.125 19.515625 1.941406 19.839844 1.9375 20.1875 L 1.9375 20.3125 C 1.9375 23.996094 3.84375 27.195313 6.65625 29.15625 C 6.625 29.152344 6.59375 29.164063 6.5625 29.15625 C 6.21875 29.097656 5.871094 29.21875 5.640625 29.480469 C 5.410156 29.742188 5.335938 30.105469 5.4375 30.4375 C 6.554688 33.910156 9.40625 36.5625 12.9375 37.53125 C 10.125 39.203125 6.863281 40.1875 3.34375 40.1875 C 2.582031 40.1875 1.851563 40.148438 1.125 40.0625 C 0.65625 40 0.207031 40.273438 0.0507813 40.71875 C -0.109375 41.164063 0.0664063 41.660156 0.46875 41.90625 C 4.980469 44.800781 10.335938 46.5 16.09375 46.5 C 25.425781 46.5 32.746094 42.601563 37.65625 37.03125 C 42.566406 31.460938 45.125 24.226563 45.125 17.46875 C 45.125 17.183594 45.101563 16.90625 45.09375 16.625 C 46.925781 15.222656 48.5625 13.578125 49.84375 11.65625 C 50.097656 11.285156 50.070313 10.789063 49.777344 10.445313 C 49.488281 10.101563 49 9.996094 48.59375 10.1875 C 48.078125 10.417969 47.476563 10.441406 46.9375 10.625 C 47.648438 9.675781 48.257813 8.652344 48.625 7.5 C 48.75 7.105469 48.613281 6.671875 48.289063 6.414063 C 47.964844 6.160156 47.511719 6.128906 47.15625 6.34375 C 45.449219 7.355469 43.558594 8.066406 41.5625 8.5 C 39.625 6.6875 37.074219 5.46875 34.21875 5.46875 Z M 34.21875 7.46875 C 36.769531 7.46875 39.074219 8.558594 40.6875 10.28125 C 40.929688 10.53125 41.285156 10.636719 41.625 10.5625 C 42.929688 10.304688 44.167969 9.925781 45.375 9.4375 C 44.679688 10.375 43.820313 11.175781 42.8125 11.78125 C 42.355469 12.003906 42.140625 12.53125 42.308594 13.011719 C 42.472656 13.488281 42.972656 13.765625 43.46875 13.65625 C 44.46875 13.535156 45.359375 13.128906 46.3125 12.875 C 45.457031 13.800781 44.519531 14.636719 43.5 15.375 C 43.222656 15.578125 43.070313 15.90625 43.09375 16.25 C 43.109375 16.65625 43.125 17.058594 43.125 17.46875 C 43.125 23.71875 40.726563 30.503906 36.15625 35.6875 C 31.585938 40.871094 24.875 44.5 16.09375 44.5 C 12.105469 44.5 8.339844 43.617188 4.9375 42.0625 C 9.15625 41.738281 13.046875 40.246094 16.1875 37.78125 C 16.515625 37.519531 16.644531 37.082031 16.511719 36.683594 C 16.378906 36.285156 16.011719 36.011719 15.59375 36 C 12.296875 35.941406 9.535156 34.023438 8.0625 31.3125 C 8.117188 31.3125 8.164063 31.3125 8.21875 31.3125 C 9.207031 31.3125 10.183594 31.1875 11.09375 30.9375 C 11.53125 30.808594 11.832031 30.402344 11.816406 29.945313 C 11.800781 29.488281 11.476563 29.097656 11.03125 29 C 7.472656 28.28125 4.804688 25.382813 4.1875 21.78125 C 5.195313 22.128906 6.226563 22.402344 7.34375 22.4375 C 7.800781 22.464844 8.214844 22.179688 8.355469 21.746094 C 8.496094 21.3125 8.324219 20.835938 7.9375 20.59375 C 5.5625 19.003906 4 16.296875 4 13.21875 C 4 12.078125 4.296875 11.03125 4.6875 10.03125 C 9.6875 15.519531 16.6875 19.164063 24.59375 19.5625 C 24.90625 19.578125 25.210938 19.449219 25.414063 19.210938 C 25.617188 18.96875 25.695313 18.648438 25.625 18.34375 C 25.472656 17.695313 25.375 17.007813 25.375 16.3125 C 25.375 11.414063 29.320313 7.46875 34.21875 7.46875 Z"/></svg> 
                </div>
            </motion.div>
            <Gallery/>
            <Collection/>
            <About/>
            <Whitelist/>
            <Team/>
            <Faq/>
            <div className="footer h-auto-w-full bg-gray-900 text-white">
                <div className="footer-inner h-full w-5/6 m-auto flex flex-col px-[8%] space-y-14 pt-8 sm:w-full">
                    <div className="footer-nav flex flex-col justify-center items-center space-y-10 w-full h-full">
                        <motion.ul
                            initial={{y:150+'px', opacity:0}} 
                            whileInView={{ y:0, opacity:1}}  
                            transition={{delay: .5, type:'spring', stiffness:60}} 
                             className='justify-items-center  justify-between flex flex-auto font-semibold ease-in w-4/6 sm:flex-wrap sm:items-center sm:font-medium  sm:w-full sm:justify-around sm:text-center'>

                            <li className='hover:text-[#a7b3e9d8] delay-100 ease sm:w-[45%] sm:pb-4 sm:text-right'><a href="#collection">COLLECTION</a></li>
                            <li className='hover:text-[#a7b3e9d8] delay-100 ease sm:w-[45%] sm:pb-4 sm:text-left'><a href="#about">ABOUT</a></li>
                            <li className='hover:text-[#a7b3e9d8] delay-100 ease sm:w-full sm:pb-4'><a href="#whitelist">WHITELIST</a></li>
                            <li className='hover:text-[#a7b3e9d8] delay-100 ease sm:w-full  sm:pb-4'><a href="#team">TEAM</a></li>
                            <li className='hover:text-[#a7b3e9d8] delay-100 ease sm:w-full sm:pb-4'><a href="#faq">FAQ</a></li>
                        </motion.ul>

                        <div className="foot-nav-icons flex justify-between w-5/6 sm:3/6 sm:justify-center space-x-2 align-baseline">
                            <motion.div 
                                className='footer-icon cursor-pointer h-auto'
                                initial={{y:-100, opacity:0}} 
                                whileInView={{ y:0, opacity:1}}  
                                transition={{delay: .3, type:'spring', 
                                stiffness:100}}>
                                <svg className='fill-white sm:h-[3em] h-20 stroke-red-500 stroke-1' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 80 80" ><path d="M 48.707031 16 C 48.320313 16.007813 47.976563 16.234375 47.816406 16.585938 C 47.816406 16.585938 47.257813 17.816406 46.957031 19.503906 C 43.953125 19 41.410156 18.875 40 18.875 C 38.589844 18.875 36.046875 19 33.042969 19.503906 C 32.742188 17.816406 32.183594 16.585938 32.183594 16.585938 C 32.011719 16.210938 31.628906 15.980469 31.21875 16 C 31.207031 16.003906 31.199219 16.003906 31.191406 16.003906 C 31.191406 16.003906 21.992188 16.640625 16.105469 21.316406 C 16.089844 21.332031 16.070313 21.34375 16.054688 21.359375 C 15.121094 22.210938 14.296875 23.699219 13.328125 25.8125 C 12.363281 27.929688 11.34375 30.628906 10.40625 33.6875 C 8.535156 39.804688 7 47.335938 7 54.375 C 7 54.550781 7.046875 54.722656 7.132813 54.875 C 9.179688 58.425781 12.976563 60.632813 16.574219 62.015625 C 20.167969 63.394531 23.539063 63.949219 25.152344 64 C 25.480469 64.011719 25.792969 63.859375 25.984375 63.59375 L 29.730469 58.511719 C 32.617188 59.203125 36.027344 59.6875 40 59.6875 C 43.972656 59.6875 47.382813 59.203125 50.269531 58.511719 L 54.015625 63.59375 C 54.207031 63.859375 54.519531 64.011719 54.847656 64 C 56.464844 63.949219 59.832031 63.394531 63.425781 62.015625 C 67.023438 60.632813 70.820313 58.425781 72.867188 54.875 C 72.953125 54.722656 73 54.550781 73 54.375 C 73 47.335938 71.464844 39.804688 69.59375 33.6875 C 68.65625 30.628906 67.636719 27.929688 66.671875 25.8125 C 65.703125 23.699219 64.878906 22.210938 63.949219 21.359375 C 63.929688 21.347656 63.914063 21.332031 63.894531 21.316406 C 58.007813 16.640625 48.808594 16.003906 48.808594 16.003906 C 48.773438 16 48.742188 16 48.707031 16 Z M 30.546875 18.140625 C 30.691406 18.503906 30.917969 19.003906 31.074219 19.867188 C 27.707031 20.59375 23.945313 21.835938 20.496094 23.953125 C 20.179688 24.132813 19.992188 24.472656 20 24.832031 C 20.007813 25.195313 20.207031 25.527344 20.527344 25.695313 C 20.847656 25.867188 21.234375 25.851563 21.539063 25.65625 C 28.402344 21.449219 37.03125 20.875 40 20.875 C 42.96875 20.875 51.597656 21.449219 58.460938 25.65625 C 58.765625 25.851563 59.152344 25.867188 59.472656 25.695313 C 59.792969 25.527344 59.992188 25.195313 60 24.832031 C 60.007813 24.472656 59.820313 24.132813 59.503906 23.953125 C 56.050781 21.835938 52.289063 20.59375 48.921875 19.867188 C 49.082031 19.007813 49.308594 18.503906 49.453125 18.140625 C 50.667969 18.273438 57.878906 19.125 62.613281 22.859375 C 63.019531 23.238281 63.9375 24.648438 64.851563 26.644531 C 65.769531 28.65625 66.765625 31.289063 67.679688 34.269531 C 69.480469 40.15625 70.929688 47.414063 70.972656 54.082031 C 69.25 56.882813 65.984375 58.886719 62.710938 60.144531 C 59.609375 61.339844 56.679688 61.824219 55.273438 61.929688 L 52.34375 57.953125 C 53.800781 57.515625 55.105469 57.039063 56.21875 56.558594 C 59.835938 54.984375 61.730469 53.34375 61.730469 53.34375 C 62.003906 53.109375 62.128906 52.746094 62.058594 52.394531 C 61.992188 52.042969 61.738281 51.753906 61.398438 51.636719 C 61.058594 51.523438 60.683594 51.597656 60.414063 51.839844 C 60.414063 51.839844 58.816406 53.246094 55.421875 54.722656 C 52.027344 56.199219 46.902344 57.6875 40 57.6875 C 33.097656 57.6875 27.972656 56.199219 24.578125 54.722656 C 21.183594 53.246094 19.585938 51.839844 19.585938 51.839844 C 19.410156 51.679688 19.183594 51.589844 18.949219 51.582031 C 18.523438 51.570313 18.136719 51.824219 17.984375 52.222656 C 17.832031 52.617188 17.945313 53.070313 18.269531 53.34375 C 18.269531 53.34375 20.164063 54.984375 23.78125 56.558594 C 24.894531 57.039063 26.199219 57.515625 27.65625 57.953125 L 24.726563 61.929688 C 23.320313 61.824219 20.390625 61.339844 17.292969 60.144531 C 14.019531 58.886719 10.75 56.882813 9.027344 54.082031 C 9.070313 47.414063 10.519531 40.15625 12.320313 34.269531 C 13.234375 31.289063 14.230469 28.65625 15.148438 26.644531 C 16.0625 24.648438 16.984375 23.234375 17.390625 22.859375 C 22.121094 19.125 29.332031 18.273438 30.546875 18.140625 Z M 17.78125 28.429688 L 16.957031 28.78125 L 16.78125 29.082031 L 16.746094 29.175781 L 16.847656 30.066406 L 17.621094 30.519531 L 18.449219 30.171875 L 18.625 29.863281 L 18.65625 29.769531 L 18.558594 28.878906 Z M 62.566406 28.46875 L 61.683594 28.625 L 61.28125 29.421875 L 61.34375 29.769531 L 61.375 29.863281 L 62.027344 30.480469 L 62.910156 30.324219 L 63.3125 29.523438 L 63.253906 29.175781 L 63.21875 29.082031 Z M 16.390625 32.292969 L 15.574219 32.660156 L 15.40625 32.96875 L 15.371094 33.0625 L 15.496094 33.953125 L 16.277344 34.386719 L 17.09375 34.015625 L 17.265625 33.707031 L 17.296875 33.613281 L 17.171875 32.722656 Z M 63.957031 32.339844 L 63.074219 32.472656 L 62.652344 33.265625 L 62.703125 33.613281 L 62.734375 33.707031 L 63.375 34.339844 L 64.261719 34.203125 L 64.683594 33.410156 L 64.628906 33.0625 L 64.59375 32.96875 Z M 30 36 C 26.644531 36 24 38.972656 24 42.5 C 24 46.027344 26.644531 49 30 49 C 33.355469 49 36 46.027344 36 42.5 C 36 38.972656 33.355469 36 30 36 Z M 50 36 C 46.644531 36 44 38.972656 44 42.5 C 44 46.027344 46.644531 49 50 49 C 53.355469 49 56 46.027344 56 42.5 C 56 38.972656 53.355469 36 50 36 Z M 15.105469 36.203125 L 14.3125 36.613281 L 14.15625 36.933594 L 14.128906 37.03125 L 14.300781 37.90625 L 15.109375 38.296875 L 15.90625 37.886719 L 16.058594 37.566406 L 16.082031 37.46875 L 15.914063 36.59375 Z M 65.238281 36.269531 L 64.347656 36.355469 L 63.882813 37.121094 L 63.917969 37.46875 L 63.941406 37.566406 L 64.546875 38.230469 L 65.4375 38.144531 L 65.902344 37.378906 L 65.871094 37.03125 L 65.84375 36.933594 Z M 30 38 C 32.167969 38 34 39.953125 34 42.5 C 34 45.046875 32.167969 47 30 47 C 27.832031 47 26 45.046875 26 42.5 C 26 39.953125 27.832031 38 30 38 Z M 50 38 C 52.167969 38 54 39.953125 54 42.5 C 54 45.046875 52.167969 47 50 47 C 47.832031 47 46 45.046875 46 42.5 C 46 39.953125 47.832031 38 50 38 Z M 14 40.160156 L 13.21875 40.609375 L 13.082031 40.929688 L 13.058594 41.027344 L 13.265625 41.902344 L 14.085938 42.253906 L 14.863281 41.8125 L 15.003906 41.488281 L 15.027344 41.390625 L 14.820313 40.515625 Z M 66.34375 40.242188 L 65.449219 40.292969 L 64.953125 41.039063 L 64.972656 41.390625 L 64.996094 41.488281 L 65.570313 42.175781 L 66.464844 42.125 L 66.960938 41.378906 L 66.941406 41.027344 L 66.917969 40.929688 Z M 13.066406 44.167969 L 12.308594 44.640625 L 12.179688 44.96875 L 12.160156 45.066406 L 12.402344 45.933594 L 13.234375 46.253906 L 13.996094 45.78125 L 14.125 45.453125 L 14.140625 45.355469 L 13.902344 44.488281 Z M 67.269531 44.261719 L 66.375 44.277344 L 65.851563 45 L 65.859375 45.355469 L 65.875 45.453125 L 66.421875 46.160156 L 67.320313 46.144531 L 67.84375 45.421875 L 67.839844 45.066406 L 67.820313 44.96875 Z M 12.386719 48.230469 L 11.660156 48.753906 L 11.558594 49.09375 L 11.546875 49.191406 L 11.847656 50.035156 L 12.703125 50.300781 L 13.425781 49.769531 L 13.53125 49.4375 L 13.546875 49.335938 L 13.242188 48.492188 Z M 67.050781 48.296875 L 66.472656 48.984375 L 66.453125 49.335938 L 66.46875 49.4375 L 66.964844 50.183594 L 67.859375 50.230469 L 68.433594 49.546875 L 68.453125 49.191406 L 68.441406 49.09375 L 67.945313 48.34375 Z"/></svg>
                            </motion.div>

                            <motion.div 
                                className='footer-icon cursor-pointer h-auto sm:hidden'
                                initial={{y:-150, x:30, opacity:0, scale:3}} 
                                whileInView={{ y:0,x:0, opacity:1,scale:2}}  
                                transition={{delay: .5, type:'spring', 
                                stiffness:100}}>
                                <svg className='fill-white h-20 stroke-red-500 stroke-1' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" width="32px" height="32px"><path d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z"/></svg>
                            </motion.div>

                            <motion.div 
                                className='footer-icon cursor-pointer h-auto'
                                initial={{y:-130,x:-30, opacity:0}} 
                                whileInView={{ y:0,x:0, opacity:1}}  
                                transition={{delay: .3, type:'spring', 
                                stiffness:100}}>
                                <svg className='fill-white sm:h-[2.5em] h-20 stroke-red-500 stroke-1' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z"/></svg>
                            </motion.div> 

                            <motion.div 
                                className='footer-icon cursor-pointer h-auto'
                                initial={{y:-150,x:-100, opacity:0}} 
                                whileInView={{ y:0,x:0, opacity:1}}  
                                transition={{delay: .5, type:'spring', 
                                stiffness:100}}>
                                <svg className='fill-white sm:h-[2.5em] h-20 stroke-red-500 stroke-1' xmlns="http://www.w3.org/2000/svg "  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 34.21875 5.46875 C 28.238281 5.46875 23.375 10.332031 23.375 16.3125 C 23.375 16.671875 23.464844 17.023438 23.5 17.375 C 16.105469 16.667969 9.566406 13.105469 5.125 7.65625 C 4.917969 7.394531 4.597656 7.253906 4.261719 7.277344 C 3.929688 7.300781 3.632813 7.492188 3.46875 7.78125 C 2.535156 9.386719 2 11.234375 2 13.21875 C 2 15.621094 2.859375 17.820313 4.1875 19.625 C 3.929688 19.511719 3.648438 19.449219 3.40625 19.3125 C 3.097656 19.148438 2.726563 19.15625 2.425781 19.335938 C 2.125 19.515625 1.941406 19.839844 1.9375 20.1875 L 1.9375 20.3125 C 1.9375 23.996094 3.84375 27.195313 6.65625 29.15625 C 6.625 29.152344 6.59375 29.164063 6.5625 29.15625 C 6.21875 29.097656 5.871094 29.21875 5.640625 29.480469 C 5.410156 29.742188 5.335938 30.105469 5.4375 30.4375 C 6.554688 33.910156 9.40625 36.5625 12.9375 37.53125 C 10.125 39.203125 6.863281 40.1875 3.34375 40.1875 C 2.582031 40.1875 1.851563 40.148438 1.125 40.0625 C 0.65625 40 0.207031 40.273438 0.0507813 40.71875 C -0.109375 41.164063 0.0664063 41.660156 0.46875 41.90625 C 4.980469 44.800781 10.335938 46.5 16.09375 46.5 C 25.425781 46.5 32.746094 42.601563 37.65625 37.03125 C 42.566406 31.460938 45.125 24.226563 45.125 17.46875 C 45.125 17.183594 45.101563 16.90625 45.09375 16.625 C 46.925781 15.222656 48.5625 13.578125 49.84375 11.65625 C 50.097656 11.285156 50.070313 10.789063 49.777344 10.445313 C 49.488281 10.101563 49 9.996094 48.59375 10.1875 C 48.078125 10.417969 47.476563 10.441406 46.9375 10.625 C 47.648438 9.675781 48.257813 8.652344 48.625 7.5 C 48.75 7.105469 48.613281 6.671875 48.289063 6.414063 C 47.964844 6.160156 47.511719 6.128906 47.15625 6.34375 C 45.449219 7.355469 43.558594 8.066406 41.5625 8.5 C 39.625 6.6875 37.074219 5.46875 34.21875 5.46875 Z M 34.21875 7.46875 C 36.769531 7.46875 39.074219 8.558594 40.6875 10.28125 C 40.929688 10.53125 41.285156 10.636719 41.625 10.5625 C 42.929688 10.304688 44.167969 9.925781 45.375 9.4375 C 44.679688 10.375 43.820313 11.175781 42.8125 11.78125 C 42.355469 12.003906 42.140625 12.53125 42.308594 13.011719 C 42.472656 13.488281 42.972656 13.765625 43.46875 13.65625 C 44.46875 13.535156 45.359375 13.128906 46.3125 12.875 C 45.457031 13.800781 44.519531 14.636719 43.5 15.375 C 43.222656 15.578125 43.070313 15.90625 43.09375 16.25 C 43.109375 16.65625 43.125 17.058594 43.125 17.46875 C 43.125 23.71875 40.726563 30.503906 36.15625 35.6875 C 31.585938 40.871094 24.875 44.5 16.09375 44.5 C 12.105469 44.5 8.339844 43.617188 4.9375 42.0625 C 9.15625 41.738281 13.046875 40.246094 16.1875 37.78125 C 16.515625 37.519531 16.644531 37.082031 16.511719 36.683594 C 16.378906 36.285156 16.011719 36.011719 15.59375 36 C 12.296875 35.941406 9.535156 34.023438 8.0625 31.3125 C 8.117188 31.3125 8.164063 31.3125 8.21875 31.3125 C 9.207031 31.3125 10.183594 31.1875 11.09375 30.9375 C 11.53125 30.808594 11.832031 30.402344 11.816406 29.945313 C 11.800781 29.488281 11.476563 29.097656 11.03125 29 C 7.472656 28.28125 4.804688 25.382813 4.1875 21.78125 C 5.195313 22.128906 6.226563 22.402344 7.34375 22.4375 C 7.800781 22.464844 8.214844 22.179688 8.355469 21.746094 C 8.496094 21.3125 8.324219 20.835938 7.9375 20.59375 C 5.5625 19.003906 4 16.296875 4 13.21875 C 4 12.078125 4.296875 11.03125 4.6875 10.03125 C 9.6875 15.519531 16.6875 19.164063 24.59375 19.5625 C 24.90625 19.578125 25.210938 19.449219 25.414063 19.210938 C 25.617188 18.96875 25.695313 18.648438 25.625 18.34375 C 25.472656 17.695313 25.375 17.007813 25.375 16.3125 C 25.375 11.414063 29.320313 7.46875 34.21875 7.46875 Z"/></svg> 
                            </motion.div>
                        </div>
                    </div>
                    <p className='text-[#5d6ebe] text-center text-sm p-4 sm:text-xs'>Design Inspiration from <a className='underline text-white hover:text-[#cdd5f7cb] ease-in delay-100' target={'_blank'} rel={'noreferrer'} href="https://evolutionapes.com/">Evolution Apes</a>. Coded By <a className='text-white hover:text-[#cdd5f7cb] ease-in  delay-100' target={'_blank'} rel={'noreferrer'} href="https://www.twitter.com/praise_oyeniyi">Praise_oyeniyi</a></p>
                </div>
            </div>
    </div>
  )
}

export default Body