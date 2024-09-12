import { z } from 'zod'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { createGoal } from '../../services/create-goal'

export const createGoalRoute: FastifyPluginAsyncZod = async app => {
  app.post(
    '/goals',
    {
      schema: {
        body: z.object({
          title: z.string(),
          desiredWeeklyFrequency: z.number().int().min(1).max(7),
        }),
      },
    },
    async (request, reply) => {
      const { title, desiredWeeklyFrequency } = request.body
      console.log(title, desiredWeeklyFrequency)
      try {
        const result = await createGoal({
          title,
          desiredWeeklyFrequency,
        })
        reply.send(result)
      } catch (error) {
        // Log the error for debugging purposes
        console.error(error)

        // Return a 500 Internal Server Error response
        reply.status(500).send({
          error: 'Internal Server Error',
          message: 'An error occurred while creating the goal. Please try again later.',
        })
      }
    }
  )
}