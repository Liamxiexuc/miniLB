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

  return (
    <div style={content}>
      <div className="text-center mb-5">
        <Link href="#">
          <a className="logo mr-0">
            <SmileFilled size={48} strokeWidth={1} />
          </a>
        </Link>

        <h1 className="mb-0 mt-3 text-disabled">Tiny Legacy Builder !</h1>
      </div>
      <div className={styles.content}>
        <PropertyTable />
        <Button
          className={styles.btn}
          onClick={() => setVisible(true)}
          type="primary"
        >
          Add
        </Button>
      </div>
      <Address visible={visible} setVisible={setVisible} />
    </div>
  );
}
