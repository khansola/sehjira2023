import UserCard from "@/components/atoms/UserCard";
import BlankTemplate from "@/components/templates/BlankTemplate";
import axios from "axios";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";

type user = {
	id: number;
	firstName: string;
	lastName: string;
	maidenName: string;
	age: number;
	gender: string;
	email: string;
	birthDate: string;
	image: string;
	address: {
		address: string;
		city: string;
		postalCode: string;
		state: string;
	};
	macAddress: string;
	university: string;
	bank: object;
	company: object;
};

type props = {
	users: user;
};

const MePage = ({ users }: props) => {
	const router = useRouter();
	const { uid } = router.query;

	return (
		<BlankTemplate>
			<h1>Me Page</h1>

			<br />
			<div className="m-2 bg-violet-500">
				<h2>User Info: </h2>
				<Image
					src={users.image}
					unoptimized
					width={100}
					height={100}
					alt={users.firstName}
				/>
				<p className="font-bold">{users.firstName + users.lastName}</p>
				<p>{users.address.address}</p>
				<p>{users.email}</p>
			</div>
			<br />
			<div className="m-2 bg-yellow-300">
				<code className="bg-red-500">
					The Query: {uid} and the router query: {JSON.stringify(router.query)}
				</code>
			</div>	
		</BlankTemplate>
	);
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const res = await axios.get("https://dummyjson.com/users/" + ctx.query.uid);

	return {
		props: {
			users: res.data,
		},
	};
};

export default MePage;
