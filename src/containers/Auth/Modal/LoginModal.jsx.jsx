import React, { useState } from "react";
import Modal from "../../../components/ui/Modal";
import LoginForm from "../components/LoginForm";
import { useNavigate } from "react-router-dom";

const MODE = { ACCOUNT: "account", QQ: "qq", QR: "qr" };

export default function LoginModal({ isOpen, onClose }) {
  const [mode, setMode] = useState(MODE.ACCOUNT);
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md" title="">
      <div className="w-full">
        {/* Tabs */}
        <div className="flex justify-around border-b mb-4">
          {[
            { key: MODE.ACCOUNT, label: "Tài khoản" },
            { key: MODE.QQ, label: "QQ" },
            { key: MODE.QR, label: "Mã QR" },
          ].map((tab) => (
            <button
              key={tab.key}
              className={`py-2 px-4 ${
                mode === tab.key ? "border-b-2 border-red-500 text-red-500" : "text-gray-500"
              }`}
              onClick={() => setMode(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div>
          {mode === MODE.ACCOUNT && (
            <LoginForm
              onLoginSuccess={onClose}
              onSwitchToRegister={() => {
                onClose();
                navigate("/register");
              }}
            />
          )}
          {mode === MODE.QQ && (
            <div className="text-center py-6 text-gray-500">QQ chưa được hỗ trợ</div>
          )}
          {mode === MODE.QR && (
            <div className="text-center py-6 text-gray-500">Mã QR chưa được hỗ trợ</div>
          )}
        </div>
      </div>
    </Modal>
  );
}
