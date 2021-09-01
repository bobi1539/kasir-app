import { Button, Image } from "react-bootstrap";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Sukses extends Component {
  
  render() {
    return (
      <div className="mt-4 text-center">
        <Image src="assets/images/sukses.png" width="500" />
        <h2>Sukses</h2>
        <p>Terima Kasih Sudah Memesan</p>
        <Button variant="primary" as={Link} to="/">
          Kembali
        </Button>
      </div>
    );
  }
}
