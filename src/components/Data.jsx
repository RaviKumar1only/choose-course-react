import fullstack from '../assets/fullstack.jpg'
import dsa from '../assets/dsa.jpg'
import python from '../assets/python.jpg'
import mernstack from '../assets/mernstack.jpg'
import sd from '../assets/sd.jpg'
import devops from '../assets/devops.jpg'
import ml from '../assets/ml.jpg'

const data = [
	{
		id: 1,
		name: "Full Stack Web Development",
		info: "This comprehensive course covers both front-end and back-end development using technologies like HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. Ideal for anyone looking to build complete web applications from scratch.",
		image: fullstack,
		price: "34,999",
	},
	{
		id: 2,
		name: "Data Structures & Algorithms",
		info: "Master the fundamentals of problem-solving and algorithmic thinking. This course covers arrays, strings, linked lists, trees, graphs, sorting, searching, dynamic programming, and more — perfect for cracking coding interviews.",
		image: dsa,
		price: "29,999",
	},
	{
		id: 3,
		name: "Python for Beginners",
		info: "Learn Python from scratch with hands-on coding challenges, real-world examples, and projects. This course is beginner-friendly and ideal for students entering the world of programming.",
		image: python,
		price: "19,999",
	},
	{
		id: 4,
		name: "MERN Stack Mastery",
		info: "Dive deep into the MERN stack: MongoDB, Express.js, React, and Node.js. This course focuses on creating modern, full-featured web applications and APIs with real-world projects.",
		image: mernstack,
		price: "39,999",
	},
	{
		id: 5,
		name: "System Design",
		info: "Designed for advanced learners and job-seekers, this course helps you master scalable architecture, design patterns, load balancing, caching, and more to ace system design interviews.",
		image: sd,
		price: "44,999",
	},
	{
		id: 6,
		name: "DevOps with Docker & Kubernetes",
		info: "Explore the fundamentals of DevOps practices, including CI/CD pipelines, containerization with Docker, and orchestration with Kubernetes. Build and deploy scalable applications efficiently.",
		image: devops,
		price: "36,499",
	},
	{
		id: 7,
		name: "Machine Learning with Python",
		info: "Learn the basics of machine learning, data preprocessing, model training, and evaluation using Python libraries like scikit-learn, pandas, and matplotlib. Build real-world ML models.",
		image: ml,
		price: "42,000",
	},
];

export default data;