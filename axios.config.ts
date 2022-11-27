"use client";

import "client-only";

import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

instance.interceptors.request.use(
  async function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (err) {
    return Promise.reject(err);
  }
);

export default instance;
