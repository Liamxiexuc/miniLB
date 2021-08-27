import { useState } from "react";
import { Button } from "antd";
import { SmileFilled } from "@ant-design/icons";
import { PropertyTable } from "../components/PropertyTable";
import { Address } from "../components/Address";
import Link from "next/link";
import styles from "./index.module.css";

const content = {
  marginTop: "100px",
};

export default function Home() {
  const [visible, setVisible] = useState(false);
  const [properties, setProperties] = useState([]);

  return (
    <div style={content}>
      <div className="text-center mb-5">
        <Link href="#">
          <a className="logo mr-0">
            <SmileFilled size={48} strokeWidth={1} />
          </a>
        </Link>

        <h1 className="mb-0 mt-3 text-disabled">Mini Legacy Builder !</h1>
      </div>
      <div className={styles.content}>
        <PropertyTable properties={properties} setProperties={setProperties} />
        <Button
          className={styles.btn}
          onClick={() => setVisible(true)}
          type="primary"
        >
          Add
        </Button>
      </div>
      <Address
        properties={properties}
        setProperties={setProperties}
        visible={visible}
        setVisible={setVisible}
      />
    </div>
  );
}
