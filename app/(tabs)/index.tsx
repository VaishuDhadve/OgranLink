import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Bell, Heart, Users, Award } from "lucide-react-native";

type StatCardProps = {
  icon: JSX.Element;
  number: string;
  label: string;
};

type RequestCardProps = {
  bloodType: string;
  urgency: string;
  title: string;
  location: string;
  timePosted: string;
};

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-gray-100">
      {/* Welcome Section */}
      <View className="px-5 my-5">
        <Text className="mt-5 text-xl font-bold text-gray-800">
          Welcome back, John!
        </Text>
        <Text className="mt-1 text-sm text-gray-600">
          Thank you for being a part of saving lives.
        </Text>
      </View>

      {/* Stats Section */}
      <View className="flex-row justify-between px-5 mb-6">
        <StatCard
          icon={<Heart size={24} color="#e74c3c" />}
          number="120+"
          label="Lives Saved"
        />
        <StatCard
          icon={<Users size={24} color="#3498db" />}
          number="450+"
          label="Active Donors"
        />
        <StatCard
          icon={<Award size={24} color="#f39c12" />}
          number="98%"
          label="Success Rate"
        />
      </View>

      {/* Recent Requests */}
      <View className="mb-6">
        <View className="flex-row justify-between items-center px-5 mb-4">
          <Text className="text-lg font-semibold text-gray-800">
            Recent Requests
          </Text>
          <TouchableOpacity>
            <Text className="text-sm font-medium text-red-500">See All</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="pl-5">
          {[1, 2, 3].map((item) => (
            <RequestCard
              key={item}
              bloodType="A+"
              urgency="Urgent"
              title="Kidney Needed"
              location="City Hospital, New York"
              timePosted="Posted 2 hours ago"
            />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const StatCard: React.FC<StatCardProps> = ({ icon, number, label }) => (
  <View className="bg-white rounded-xl p-4 items-center w-[30%] shadow-md">
    {icon}
    <Text className="mt-2 text-lg font-bold text-gray-800">{number}</Text>
    <Text className="mt-1 text-xs text-gray-600">{label}</Text>
  </View>
);

const RequestCard: React.FC<RequestCardProps> = ({
  bloodType,
  urgency,
  title,
  location,
  timePosted,
}) => (
  <View className="bg-white rounded-xl p-4 mr-4 w-60 shadow-md">
    <View className="flex-row justify-between mb-2">
      <View className="bg-blue-100 px-3 py-1 rounded-md">
        <Text className="text-xs font-semibold text-red-500">{bloodType}</Text>
      </View>
      <Text className="text-xs font-semibold text-red-500">{urgency}</Text>
    </View>
    <Text className="text-base font-semibold text-gray-800 mb-1">{title}</Text>
    <Text className="text-sm text-gray-600 mb-1">{location}</Text>
    <Text className="text-xs text-gray-500 mb-3">{timePosted}</Text>
    <TouchableOpacity className="bg-primary rounded-md py-2 items-center">
      <Text className="text-white text-sm font-medium">View Details</Text>
    </TouchableOpacity>
  </View>
);
