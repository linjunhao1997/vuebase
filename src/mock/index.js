import Mock from 'mockjs'
import {getUserInfo} from "@/mock/response/user";

Mock.mock('/api/getUserInfo', getUserInfo)

