import config from 'config'
import { verify } from 'jsonwebtoken'

export default (req, res, next) => {
  const token = req.header('x-auth-token')

  if (!token) {
    return res.status(401).json({ msg: 'Access Denied! No Token Found' })
  }

  try {
    const decode = verify(token, config.get('jwt-secret'))
    req.user = decode.user
    next()
  } catch (er) {
    res.status(401).json({ msg: 'Access Denied! Invalid Token' })
  }
}
