interface StepIndicatorProps {
  steps: string[];
  currentStep: number;
}

export function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  return (
    <nav aria-label="Quote form progress" className="mb-8">
      <ol className="flex items-center">
        {steps.map((step, i) => (
          <li key={step} className="flex items-center">
            <div className="flex items-center gap-2">
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${
                  i < currentStep
                    ? "bg-green-500 text-white"
                    : i === currentStep
                      ? "bg-orange-500 text-white"
                      : "bg-gray-200 text-gray-500"
                }`}
                aria-current={i === currentStep ? "step" : undefined}
              >
                {i < currentStep ? (
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  i + 1
                )}
              </span>
              <span
                className={`hidden text-sm sm:block ${
                  i === currentStep ? "font-semibold text-navy-900" : "text-gray-500"
                }`}
              >
                {step}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div
                className={`mx-3 h-0.5 w-8 sm:w-12 ${
                  i < currentStep ? "bg-green-500" : "bg-gray-200"
                }`}
                aria-hidden="true"
              />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
