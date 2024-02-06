import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const AlatBantu = ({navigation}) => {
  const [judulAudit, setJudulAudit] = useState('');
  const [areaAudit, setAreaAudit] = useState('');
  const [tanggalAudit, setTanggalAudit] = useState('');
  const [tanggalClose, setTanggalClose] = useState('');
  const userAuditor = 'Nama User Login'; // Ganti dengan data user yang sesuai
  const [answer, setAnswer] = useState(''); // State untuk menyimpan jawaban

 
  const navigateToNewPage = (userAnswer) => {
    navigation.navigate('NewPage', { judulAudit, areaAudit, tanggalAudit, tanggalClose, onSubmitAnswer });
  };

  const onSubmitAnswer = (userAnswer) => {
    // Handle jawaban yang dikirim dari halaman baru
    setAnswer(userAnswer);
  };

  const handleSubmit = () => {
    // Lakukan sesuatu dengan data audit yang dikirim
    console.log({
      judulAudit,
      areaAudit,
      tanggalAudit,
      tanggalClose,
      userAuditor,
    });
    // Reset formulir setelah pengiriman
    setJudulAudit('');
    setAreaAudit('');
    setTanggalAudit('');
    setTanggalClose('');
//pindah halaman
navigateToNewPage()

  };
  return (
    <View>
       <Text>Form Input Audit</Text>
       <View style={{ marginTop: 20 }}>
        <Text>Judul Audit:</Text>
      </View>

      <TextInput
        placeholder="Isi Judul / Temuan Audit"
        value={judulAudit}
        onChangeText={(text) => setJudulAudit(text)}
      />
        <Text>Area Audit:</Text>
      <TextInput
        placeholder="Isi Area Audit"
        value={areaAudit}
        onChangeText={(text) => setAreaAudit(text)}
      />
        <Text>Tanggal Audit::</Text>
        <TextInput
        placeholder="YYYY-MM-DD"
        value={tanggalAudit}
        onChangeText={(text) => setTanggalAudit(text)}
      />
        <Text>Tanggal Close Audit:</Text>
        <TextInput
        placeholder="YYYY-MM-DD"
        value={tanggalClose}
        onChangeText={(text) => setTanggalClose(text)}
      />

    <View>
      <TextInput
        placeholder="Audit"
        value={judulAudit}
        onChangeText={(text) => setInputText(text)}
      />
      <Button title="Go to New Page" onPress={navigateToNewPage} />

      {/* Tampilkan jawaban di halaman utama */}
      <View style={{ marginTop: 20 }}>
        <Text>Judul Audit yang terisi:</Text>
        <Text>{judulAudit}</Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text>Area Audit yang terisi:</Text>
        <Text>{areaAudit}</Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text>Tanggal Audit yang terisi:</Text>
        <Text>{tanggalAudit}</Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text>Tanggal Close yang terisi:</Text>
        <Text>{tanggalClose}</Text>
      </View>
    </View>
 
      <Text>User Auditor: {userAuditor}</Text>
      {/* Jika data user auditor berasal dari data login, tampilkan di sini */}

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default AlatBantu;
