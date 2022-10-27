import React, { useState } from 'react';
import './Show.css';
import { Container, Image, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Card from 'react-bootstrap/Card';

export default function Search() {
  const [keyword, setKeyword] = useState('');
  // const [showKelompok, setShowKelompok] = useState(false);
  // const hideKelompok = () => {
  //     setShowKelompok(!showKelompok);
  // };
  return (
    <div className="app">
      <Container className="klik"> Klik untuk menampilkan anggota kelompok</Container>
      <ThemedButton />
    </div>
  );
}
function ThemedButton() {
  const [showKelompok, setShowKelompok] = useState(false);
  const hideKelompok = () => {
    setShowKelompok(!showKelompok);
  };
  return (
    <Container>
      <div className="ViewKelompok">
        <div
          className="ViewKelompok1"
          style={{
            display: showKelompok === true ? 'flex' : 'none',
          }}
        >
          <Card className="cardKelompok">
            <Card.Title>Anadda Ferrell</Card.Title>
            <Card.Text>21120119130035</Card.Text>
          </Card>
          <Card className="cardKelompok">
            <Card.Title>Muhammad Alifa Ramdhan</Card.Title>
            <Card.Text>21120119140092</Card.Text>
          </Card>
          <Card className="cardKelompok">
            <Card.Title>M.Farhan Athaullah</Card.Title>
            <Card.Text>21120119130072</Card.Text>
          </Card>
          <Card className="cardKelompok">
            <Card.Title>Rama Pradana Putra</Card.Title>
            <Card.Text>21120119140125</Card.Text>
          </Card>
        </div>
        <Button onClick={hideKelompok}>{showKelompok !== true ? 'Show' : 'Hide'}</Button>
      </div>
    </Container>
  );
}
