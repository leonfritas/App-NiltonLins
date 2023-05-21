import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";

const StudentScreen = () => {
  const [studentId, setStudentId] = useState("");
  const [studentData, setStudentData] = useState(null);
  const [error, setError] = useState(null);

  const handleCreateStudent = async () => {
    try {
      const response = await Api.createStudent({ id: studentId });
      setStudentData(response);
      setError(null);
    } catch (error) {
      setError(error.message);
      setStudentData(null);
    }
  };

  const handleGetStudent = async () => {
    try {
      const response = await Api.getStudent(studentId);
      setStudentData(response);
      setError(null);
    } catch (error) {
      setError(error.message);
      setStudentData(null);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Student ID"
        value={studentId}
        onChangeText={setStudentId}
      />
      <Button title="Create Student" onPress={handleCreateStudent} />
      <Button title="Get Student" onPress={handleGetStudent} />
      {studentData && <Text>{JSON.stringify(studentData)}</Text>}
      {error && <Text>{error}</Text>}
    </View>
  );
};

export default StudentScreen;
