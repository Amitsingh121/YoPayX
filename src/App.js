import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Background from "./components/common/Background";
import BasicDetials from "./components/KYC/BasicDetials";
import BankDetails from "./components/KYC/BankDetails";
import KYC from "./components/KYC/KYC";
import Document from "./components/KYC/Documents";
import MultiFactorAuth from "./components/KYC/MultiFactorAuth";
import TransactionPin from "./components/KYC/TransactionPin";
import TradingScreen from "./components/Funds/TradingScreen";
import { ToastContainer } from "react-toastify";
import Profile from "./pages/Profile";
import AddFunds from "./pages/Funds/AddFunds";
import BuyAssets from "./pages/Funds/BuyAssets";
import OTP from "./components/KYC/OPT";
import ConfirmAddFund from "./pages/Funds/ConfirmAddFund";
import Dashboard2 from "./pages/dashboard/Dashboard2";
import Transaction from "./pages/Funds/Transaction";
import TransferAmountScreen from "./components/Funds/TransferAmountScreen";
import Wallet from "./pages/Funds/Wallet";
import Page1 from "./pages/staking/Page1";
import TaskList from "./pages/Reward/TaskList";
import PhoneGiveaway from "./pages/Reward/PhoneGiveaway";
import StakingSummary from "./pages/staking/StakingSummary";
import NotificationCenter from "./pages/NotificationCenter";
import Ticket from "./pages/Ticket";
import TicketForm from "./components/ticket/TicketForm";
import RewardPage from "./pages/Reward/RewardPage";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Background>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard2 />} />
          <Route path="/dashboard2" element={<Dashboard2 />} />
          <Route path="/kyc" element={<KYC />}>
            <Route path="basic-details" element={<BasicDetials />} />
            <Route path="documents" element={<Document />} />
            <Route path="bank-details" element={<BankDetails />} />
            <Route path="mfa" element={<MultiFactorAuth />} />
            <Route path="otp" element={<OTP />} />
          </Route>
          <Route path="/transaction-pin" element={<TransactionPin />} />
          <Route path="/fund" element={<TradingScreen />} />
          <Route path="/transfer-fund" element={<TransferAmountScreen />} />
          <Route path="/add-fund" element={<AddFunds />} />
          <Route path="/buy-assets" element={<BuyAssets />} />
          <Route path="/confirm-add-fund" element={<ConfirmAddFund />} />
          <Route path="/transaction-history" element={<Transaction />} />
          <Route path="/notifications" element={<NotificationCenter />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/task-list" element={<TaskList />} />
          <Route path="/phone-giveaway" element={<PhoneGiveaway />} />
          <Route path="/staking-summary" element={<StakingSummary />} />

          <Route path="/reward" element={<RewardPage />} />
          
          <Route path="/ticket" element={<Ticket />} />
          <Route path="create-ticket" element={<TicketForm />} />


          <Route path="/background" element={<Background />} />
        </Routes>
      </Background>
    </>
  );
}

export default App;
