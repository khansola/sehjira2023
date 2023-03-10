import UserCard from "@/components/atoms/UserCard";
import BlankTemplate from "@/components/templates/BlankTemplate";
import axios from "axios";
import { GetServerSideProps } from "next";
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
	users: user[];
};

const MePage = ({ users }: props) => {
	const router = useRouter()
	
	const handlingRoute = (uid: number) => {
		router.push(`/users/${uid}`)
	}

	return (
		<BlankTemplate>
			<h1>Me Page</h1>
			{users.map((value, index) => {
				return (
					<UserCard
						action={() => {handlingRoute(value.id)}}
						key={index}
						username={value.firstName + value.lastName}
						address={value.address.address}
						email={value.email}
						url={value.image}
					/>
				);
			})}
		</BlankTemplate>
	);
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const res = await axios.get("https://dummyjson.com/users?limit=10");

	return {
		props: {
			users: res.data.users,
		},
	};
};

export default MePage;
