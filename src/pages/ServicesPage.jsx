import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Code, TrendingUp, BarChart, Share2, Search, PenTool, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
	{
		icon: <Code className="h-12 w-12 text-primary" />,
		title: 'Web Development',
		description:
			'Build stunning, high-performance websites that drive results and elevate your brand. Our expert developers create custom web solutions tailored to your unique business needs, ensuring a seamless user experience across all devices.',
		features: [
			'Custom website design and development',
			'Responsive design for mobile and desktop',
			'E-commerce solutions and integrations',
			'Content Management System (CMS) setup',
			'Website maintenance and support',
		],
	},
	{
		icon: <TrendingUp className="h-12 w-12 text-primary" />,
		title: 'Digital Marketing Strategy',
		description:
			'Develop comprehensive strategies that drive growth and maximize your online presence. Our data-driven approach ensures that every marketing dollar is spent effectively to achieve your business goals.',
		features: [
			'Comprehensive market analysis',
			'Competitor research and positioning',
			'Customer journey mapping',
			'Multi-channel marketing plans',
			'ROI-focused campaign development',
		],
	},
	{
		icon: <Share2 className="h-12 w-12 text-primary" />,
		title: 'Social Media Management',
		description:
			'Engage your audience with compelling content across all social media platforms. Our social media experts will help you build a strong online community and drive meaningful interactions with your brand.',
		features: [
			'Platform-specific content creation',
			'Community management and engagement',
			'Paid social media advertising',
			'Influencer partnership strategies',
			'Social listening and reputation management',
		],
	},
	{
		icon: <Search className="h-12 w-12 text-primary" />,
		title: 'SEO Optimization',
		description:
			'Improve your search rankings and drive organic traffic to your website. Our SEO specialists use the latest techniques to ensure your brand is visible to potential customers when they search for relevant keywords.',
		features: [
			'Keyword research and optimization',
			'On-page and technical SEO',
			'Content strategy for search',
			'Link building and authority development',
			'Local SEO for physical businesses',
		],
	},
	{
		icon: <BarChart className="h-12 w-12 text-primary" />,
		title: 'Analytics & Reporting',
		description:
			'Track performance metrics and gain insights to optimize your marketing efforts. Our detailed reports provide clear visibility into what\'s working and where improvements can be made.',
		features: [
			'Custom dashboard development',
			'Real-time performance tracking',
			'Conversion funnel analysis',
			'A/B testing and optimization',
			'Monthly performance reviews',
		],
	},
	{
		icon: <PenTool className="h-12 w-12 text-primary" />,
		title: 'Content Creation',
		description:
			'Produce high-quality, engaging content that resonates with your target audience. From blog posts to videos, our creative team will help you tell your brand story in compelling ways.',
		features: [
			'Blog and article writing',
			'Video production and editing',
			'Infographic and visual content design',
			'Email newsletter creation',
			'Ebook and whitepaper development',
		],
	},
];

const ServicesPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
			className="pt-24 pb-20"
		>
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-center max-w-3xl mx-auto mb-16"
				>
					<h1 className="text-4xl md:text-5xl font-bold mb-6">
						Our <span className="gradient-text">Services</span>
					</h1>
					<p className="text-lg text-foreground/70">
						We offer a comprehensive suite of digital marketing and web development services designed to help your business thrive in the digital landscape. Each service is tailored to your specific needs and goals.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 gap-16 mt-16">
					{services.map((service, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
							className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
								index % 2 === 1 ? 'lg:flex-row-reverse' : ''
							}`}
						>
							<div className={`order-2 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
								<div className="glass-card p-8 rounded-2xl h-full flex items-center justify-center">
									<div className="aspect-square w-full relative overflow-hidden rounded-xl">
										{service.title === 'Digital Marketing Strategy' ? (
											<video
												autoPlay
												loop
												muted
												className="w-full h-full object-cover"
											>
												<source src="/Web Design Layout.mp4" type="video/mp4" />
											</video>
										) : service.title === 'Social Media Management' ? (
											<video
												autoPlay
												loop
												muted
												className="w-full h-full object-cover"
											>
												<source src="/Instagram.mp4" type="video/mp4" />
											</video>
										) : service.title === 'SEO Optimization' ? (
											<video
												autoPlay
												loop
												muted
												className="w-full h-full object-cover"
											>
												<source src="/Website Building of Shopping Sale.mp4" type="video/mp4" />
											</video>
										) : service.title === 'Analytics & Reporting' ? (
											<video
												autoPlay
												loop
												muted
												className="w-full h-full object-cover"
											>
												<source src="/Stats.mp4" type="video/mp4" />
											</video>
										) : service.title === 'Content Creation' ? (
											<video
												autoPlay
												loop
												muted
												className="w-full h-full object-cover"
											>
												<source src="/Content Moderation.mp4" type="video/mp4" />
											</video>
										) : (
											service.title === 'Web Development' ? (
												<video
													autoPlay
													loop
													muted
													className="w-full h-full object-cover"
												>
													<source src="/web dev.mp4" type="video/mp4" />
												</video>
											) : (
												<img
													src="https://images.unsplash.com/photo-1674027392842-29f8354e236c"
													alt={`${service.title} illustration`}
													className="w-full h-full object-cover"
												/>
											)
										)}
									</div>
								</div>
							</div>

							<div className={`order-1 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
								<div className="p-2 rounded-full bg-primary/10 inline-block mb-6">
									{service.icon}
								</div>
								<h2 className="text-3xl font-bold mb-4">{service.title}</h2>
								<p className="text-foreground/70 mb-8">{service.description}</p>

								<div className="space-y-3 mb-8">
									{service.features.map((feature, i) => (
										<div key={i} className="flex items-start">
											<CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
											<span>{feature}</span>
										</div>
									))}
								</div>

								<Button className="gradient-bg">Learn More</Button>
							</div>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="mt-20 text-center glass-card p-12 rounded-2xl"
				>
					<h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
					<p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
						Contact us today to discuss how our services can help your business grow in the digital landscape.
					</p>
					<Link to="/contact">
						<Button size="lg" className="gradient-bg">
							Contact Us
						</Button>
					</Link>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default ServicesPage;
