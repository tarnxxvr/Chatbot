import {useQuery} from 'react-query';
import Chatg from './Chatg';  
  
function Calling() {
	// Fetcher function 
	const getFacts = async () => {
		const res = await fetch('https://api.quotable.io/random');
		return res.json();
	};
	// Using the hook
	const {data, error, isLoading} = useQuery('randomFacts', getFacts,{
		refetchInterval: 10000,
	});
	// Error and Loading states
	if (error) return <div>Request Failed</div>;
	if (isLoading) return <div>Loading...</div>;
	// Show the response if everything is fine
	return (
		<div>
			<h1>Random Fact:</h1>
			<Chatg response={data.content} />
			<Chatg response={data._id} />
		</div>
	);
}
export default Calling
